Mura.DisplayObject.muracontacts = Mura.UI.extend({
  // objectparams are available under 'this.context.{yourVar}'

  // Mura invokes this method by default
  render: function() {
    var self = this;

    Mura(document)
      .on('submit', 'form.muracontacts-form', function(e) {
        e.preventDefault();
        self.handleForm(Mura.formToObject(e.target));
        return false;
      });

    self.main(); // Delegating to main()
  }

  , main: function() {
    var self = this;

    Mura
      .getCurrentUser()
      .then(function(currentUser) {
        self.setLoggedInUser(currentUser.getAll());

        if ( currentUser.get('isnew') === 1 ) {
          // User not logged in
          Mura(self.context.targetEl)
            .html(muracontacts.templates.body({body:muracontacts.templates.loggedout()}));
        } else {
          // User IS logged in
          Mura(window)
            .on('hashchange', function(e) {
              self.handleHash();
            });

          self.handleHash();
        }
      });
  }

  , handleForm: function(form) {
    console.log(form);
  }

  , handleHash: function() {
    var self = this;

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));
    self.queryParams.mcaction = self.queryParams.mcaction || 'list';

    switch(self.queryParams.mcaction) {
      case 'edit':
        self.renderEditContact();
        break;
      case 'editphone':
        self.renderEditPhone();
        break;
      case 'delete':
        self.handleDelete();
        break;
      default: // list or anything else that isn't accounted for
        self.renderList();
    }
  }

  , handleDelete: function() {
    var self = this;

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));
    self.queryParams.pid = self.queryParams.pid || Mura.createUUID();

    Mura
      .getEntity('person')
      .loadBy('personid', self.queryParams.pid)
      .then(function(person) {
        person
          .delete()
          .then(
            function(obj) {
              console.log(obj);
              // success
              //window.location.hash = 'mcaction=list';

              //self.renderBody('Deleted!');
              self.renderList({text:'Deleted!', type:'success'});

            },
            function(obj) {
              console.log(obj);
              // fail
              self.renderBody('Not deleted.');
            }
          );
      });
  }

  , renderList: function(message) {
    var self = this
        , loggedInUser = self.getLoggedInUser()
        , userid = loggedInUser.userid;

    Mura
      .getFeed('person')
      .where()
      .prop('userid')
      .isEQ( userid )
      .getQuery()
      .then(function(people) {
          // success
          self.renderBody(muracontacts.templates.contactlisttable({people:people.get('items')}), message); // try people.getAll().items;
        },function(e) {
          // error
          console.warn('Error getting PERSON feed');
          console.log(e);
        });
  }

  , renderEditContact: function() {
    var self = this
        , body = ''
        , message = '';

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));
    self.queryParams.pid = self.queryParams.pid || Mura.createUUID();

    Mura
      .getBean('person')
      .loadBy('personid', self.queryParams.pid)
      .then(
        function(person) {
          // success
          var contact = person.properties
              , body = ''
              , message = '';

          contact.exists = contact.isnew === 0;
          contact.personid = contact.exists ? contact.personid : Mura.createUUID();
          contact.label = contact.exists ? 'Update' : 'Add';

          Mura
            .getFeed('personphonenumber')
            .where()
            .prop('personid')
            .isEQ( contact.personid )
            .getQuery()
            .then(function(phonenumbers) {
                // success
                body = muracontacts.templates.editcontact({contact:contact, phonenumbers:phonenumbers.get('items')});
                self.renderBody(body, message);
              },function(e) {
                // error
                console.warn('Error getting PHONENUMBERS feed');
                console.log(e);
              });

        },
        function(e) {
          // fail
          console.warn('Error getting PERSON bean');
          console.log(e);
        }
      );
  }

  , renderEditPhone: function() {
    var self = this
        , body = '';

    self.renderBody(muracontacts.templates.editphone({body:body}));
  }

  , renderBody: function(body, message) {
    var self = this
        , body = body === undefined ? '' : body
        , loggedInUser = self.getLoggedInUser();

    Mura
      .loader()
      .loadcss(self.getDisplayObjectPath() + '/assets/css/muracontacts.min.css');

    // Wraps body with muracontacts-wrapper div
    Mura(self.context.targetEl)
      .html(muracontacts.templates.body({
        body: body
        , message: message
        , userfirstname: loggedInUser.fname
      })
    );

    // Confirm delete actions
    Mura(self.context.targetEl)
      .find('.btn-delete')
      .on('click', function(e) {
        e.preventDefault();

        return confirm('Are you sure?')
          ? self.handleDelete()
          : e.preventDefault();
      });
  }

  // Mura automatically triggers this method for us
  ,registerHelpers: function() {
    var self = this;

    // Example of how to register a helper
    //Mura.Handlebars.registerHelper('helpername', function(arg1, arg2) {});
  }

  , setLoggedInUser: function(loggedInUser) {
    this.loggedInUser = loggedInUser;
  }

  , getLoggedInUser: function() {
    return this.loggedInUser;
  }

  , getDisplayObjectPath: function() {
    // Would need to modify if dropping into a plugin
    return Mura.themepath + '/display_objects/muracontacts';
  }

});
