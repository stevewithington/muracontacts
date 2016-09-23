this["muracontacts"] = this["muracontacts"] || {};
this["muracontacts"]["templates"] = this["muracontacts"]["templates"] || {};

window.mura.Handlebars.registerPartial("contactlistitem", window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr>\n\n  <!-- Contact Name -->\n  <td>\n    <a class=\"btn\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.fullname : stack1), depth0))
    + "\n    </a>\n  </td>\n\n  <td class=\"right\">\n    <!-- Edit -->\n    <a class=\"btn btn-success\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <i class=\"fa fa-pencil\"></i>\n    </a>\n\n    <!-- Delete -->\n    <form method=\"post\" class=\"muracontacts-form muracontacts-formlink\">\n      <input type=\"hidden\" name=\"mcaction\" value=\"delete\">\n      <input type=\"hidden\" name=\"pid\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.properties : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <button type=\"submit\" class=\"btn btn-danger btn-delete btn-delete-contact\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </form>\n  </td>\n\n</tr>\n";
},"useData":true}));

window.mura.Handlebars.registerPartial("phonelistitem", window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"muracontacts-phonenumber\">\n  <!-- Edit -->\n  <a class=\"btn btn-sm btn-primary\" href=\"./#mcaction=editphone&amp;pid="
    + alias4(((helper = (helper = helpers.personid || (depth0 != null ? depth0.personid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"personid","hash":{},"data":data}) : helper)))
    + "&amp;phoneid="
    + alias4(((helper = (helper = helpers.phonenumberid || (depth0 != null ? depth0.phonenumberid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phonenumberid","hash":{},"data":data}) : helper)))
    + "\">\n    <i class=\"fa fa-pencil\"></i>\n  </a>\n\n  <!-- Phone Number -->\n  <a class=\"btn\" href=\"tel:"
    + alias4(((helper = (helper = helpers.phonenumber || (depth0 != null ? depth0.phonenumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phonenumber","hash":{},"data":data}) : helper)))
    + "\">\n    "
    + alias4(((helper = (helper = helpers.phonenumber || (depth0 != null ? depth0.phonenumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phonenumber","hash":{},"data":data}) : helper)))
    + "\n    <strong>"
    + alias4(((helper = (helper = helpers.phonetype || (depth0 != null ? depth0.phonetype : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phonetype","hash":{},"data":data}) : helper)))
    + "</strong>\n  </a>\n</li>\n";
},"useData":true}));

this["muracontacts"]["templates"]["body"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "    <div class=\"muracontacts-heading\">\n      <h2>"
    + container.escapeExpression(((helper = (helper = helpers.userfirstname || (depth0 != null ? depth0.userfirstname : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"userfirstname","hash":{},"data":data}) : helper)))
    + "'s Contacts</h2>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda;

  return "    <div class=\"muracontacts-alert alert alert-"
    + container.escapeExpression(alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.type : stack1), depth0))
    + " alert-dismissible\" role=\"alert\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <p>"
    + ((stack1 = alias1(((stack1 = (depth0 != null ? depth0.message : depth0)) != null ? stack1.text : stack1), depth0)) != null ? stack1 : "")
    + "</p>\n    </div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "    <div class=\"muracontacts-body\">\n      "
    + ((stack1 = ((helper = (helper = helpers.body || (depth0 != null ? depth0.body : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"body","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"muracontacts-wrapper\">\n\n  <!-- Heading -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.userfirstname : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Messaging -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.hasmessage : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n  <!-- Body -->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.body : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n</div>\n<!-- @end muracontacts-wrapper -->\n";
},"useData":true});

this["muracontacts"]["templates"]["contactlisttable"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.people : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.contactlistitem,depth0,{"name":"contactlistitem","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "      <tr>\n        <td colspan=\"2\" class=\"info\">\n          <i class=\"fa fa-info-circle\"></i> No contacts exist yet.\n        </td>\n      </tr>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"table table-responsive\">\n  <table class=\"table-condensed table-hover\">\n\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>&nbsp;</th>\n      </tr>\n    </thead>\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.people : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    <tfoot>\n      <tr>\n        <td colspan=\"2\" class=\"addrow\">\n          <a class=\"btn btn-primary\" href=\"./#mcaction=edit&amp;pid=\">\n            <i class=\"fa fa-plus\"></i>\n          </a>\n        </td>\n    </tfoot>\n\n  </table>\n</div>\n";
},"usePartial":true,"useData":true});

this["muracontacts"]["templates"]["editcontact"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <form method=\"post\" class=\"muracontacts-form muracontacts-formlink\">\n      <input type=\"hidden\" name=\"mcaction\" value=\"delete\">\n      <input type=\"hidden\" name=\"pid\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n      <button type=\"submit\" class=\"btn btn-danger btn-delete btn-delete-contact\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </form>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"row\">\n      <div class=\"col-md-12\">\n\n        <label>Phone Numbers</label>\n        <ul class=\"nav muracontacts-phonenumbers\">\n\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},((stack1 = (depth0 != null ? depth0.phonenumbers : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n        </ul>\n\n        <!--- Add Phone --->\n        <div class=\"pad\">\n          <a class=\"btn btn-success btn-sm muracontacts-addphone-button\" href=\"./#mcaction=editphone&amp;pid="
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n            <i class=\"fa fa-plus\"></i> Phone\n          </a>\n        </div>\n      </div>\n    </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.phonenumbers : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.phonelistitem,depth0,{"name":"phonelistitem","data":data,"indent":"              ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"7":function(container,depth0,helpers,partials,data) {
    return "            <li class=\"muracontacts-phonenumber\">\n              <i class=\"fa fa-info-circle\"></i> No phone numbers exist yet.\n            </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=container.lambda, alias3=container.escapeExpression;

  return "<div class=\"pad\">\n  <a class=\"btn btn-primary\" href=\"./#mcaction=list\">\n    <i class=\"fa fa-arrow-left\"></i>\n  </a>\n\n  <!-- Delete -->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.exists : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<h3>"
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.label : stack1), depth0))
    + " Contact</h3>\n\n<form method=\"post\" class=\"muracontacts-form pad\">\n  <div class=\"form-group\">\n    <label for=\"namefirst\">First Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"namefirst\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.namefirst : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"namelast\">Last Name</label>\n    <input type=\"text\" class=\"form-control\" name=\"namelast\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.namelast : stack1), depth0))
    + "\">\n  </div>\n\n  <input type=\"hidden\" name=\"mcaction\" value=\"savecontact\">\n  <input type=\"hidden\" name=\"personid\" value=\""
    + alias3(alias2(((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n\n  <button type=\"submit\" class=\"btn btn-primary\">\n    <i class=\"fa fa-floppy-o\"></i>\n  </button>\n  <a class=\"btn btn-default\" href=\"./#mcaction=list\"><i class=\"fa fa-ban\"></i></a>\n</form>\n\n<!-- Phone Number(s) -->\n"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.contact : depth0)) != null ? stack1.exists : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<!-- @End Phone Number(s) -->\n";
},"usePartial":true,"useData":true});

this["muracontacts"]["templates"]["editphone"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <form class=\"muracontacts-formlink\">\n      <input type=\"hidden\" name=\"mcaction\" value=\"deletephone\">\n      <input type=\"hidden\" name=\"phoneid\" value=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.phoneid : stack1), depth0))
    + "\">\n      <button type=\"submit\" class=\"btn btn-danger btn-delete\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </form>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=container.escapeExpression, alias3=container.lambda;

  return alias2(helpers.log.call(alias1,(depth0 != null ? depth0.phone : depth0),{"name":"log","hash":{},"data":data}))
    + "\n<div class=\"pad\">\n  <a class=\"btn btn-primary\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n    <i class=\"fa fa-arrow-left\"></i>\n  </a>\n\n  <!--- Delete --->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.phoneexists : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<h4>"
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.label : stack1), depth0))
    + " Phone</h4>\n\n<form method=\"post\" class=\"muracontacts-form\">\n  <div class=\"form-group\">\n    <label for=\"phonenumber\">Phone Number</label>\n    <input type=\"text\" class=\"form-control\" name=\"phonenumber\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.phonenumber : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"phonetype\">Phone Type</label>\n    <select name=\"phonetype\" class=\"form-control\">\n      <option value=\"\">- Select -</option>\n\n      <cfloop array=\"#phonetypes#\" index=\"phonetype\">\n        <option value=\""
    + alias2(((helper = (helper = helpers.phonetype || (depth0 != null ? depth0.phonetype : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"phonetype","hash":{},"data":data}) : helper)))
    + "\"<cfif phoneNumberBean.get('phonetype') eq phonetype> selected=\"selected\"</cfif>>\n          #phonetype#\n        </option>\n      </cfloop>\n\n    </select>\n  </div>\n\n  <input type=\"hidden\" name=\"mcaction\" value=\"editphone\">\n  <input type=\"hidden\" name=\"personid\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\">\n  <input type=\"hidden\" name=\"phoneid\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.phonenumberid : stack1), depth0))
    + "\">\n  <input type=\"hidden\" name=\"issubmitted\" value=\"true\">\n\n  <button type=\"submit\" class=\"btn btn-primary\">\n    <i class=\"fa fa-floppy-o\"></i>\n  </button>\n  <a class=\"btn btn-default\" href=\"./#mcaction=edit&amp;pid="
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.phone : depth0)) != null ? stack1.personid : stack1), depth0))
    + "\"><i class=\"fa fa-ban\"></i></a>\n</form>\n";
},"useData":true});

this["muracontacts"]["templates"]["errormessages"] = window.mura.Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <li>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4><i class=\"fa fa-exclamation-triangle\"></i> Ooops!</h4>\n<ul>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.errors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"useData":true});

this["muracontacts"]["templates"]["loggedout"] = window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"muracontacts-heading\">\n  <h2>MuraContacts</h2>\n</div>\n<p class=\"alert alert-danger\">You must be <a href=\"./?display=login\">logged in</a> to use <strong>MuraContacts</strong></p>\n";
},"useData":true});;Mura.DisplayObject.muracontacts = Mura.UI.extend({
  // objectparams are available under 'this.context.{yourVar}'

  // Mura invokes this method by default
  render: function() {
    //this.container = Mura(this.context.targetEl); // doesn't work yet
    this.container = jQuery(Mura(this.context.targetEl).node); // works
    this.main(); // Delegating to main()
  }

  , main: function() {
    var self = this;

    Mura
      .getCurrentUser()
      .then(function(currentUser) {
        self.setLoggedInUser(currentUser.getAll());

        if ( currentUser.get('isnew') === 1 ) {
          // User not logged in
          self.container
            .html(muracontacts.templates.body({body:muracontacts.templates.loggedout()}));
        } else {
          // User IS logged in
          Mura(window)
            .on('hashchange', function(e) {
              self.handleHash();
            });

          self.container
            .on('click', '.muracontacts-wrapper .btn-delete', function(e) {
              return confirm('Are you sure?')
                ? true
                : e.preventDefault();
            });

          self.container
            .on('submit', '.muracontacts-wrapper form', function(e) {
              e.preventDefault();
              self.handleForm(Mura.formToObject(e.target));
              return false;
            });

          self.handleHash();
        }
      });
  }

  , routeAction: function(mcaction, objform) {
    var self = this
        , mcaction = mcaction === undefined ? 'list' : mcaction
        , objform = objform === undefined ? {} : objform;

    switch(mcaction) {
      case 'edit':
        self.renderEditContact(objform);
        break;
      case 'editphone':
        self.renderEditPhone(objform);
        break;
      case 'savecontact':
        self.handleSaveContact(objform);
        break;
      case 'savephone':
        self.handleSavePhone(objform);
        break;
      case 'delete':
        self.handleDeleteContact(objform);
        break;
      default: // list or anything else that isn't accounted for
        self.renderList();
    }
  }

  , handleForm: function(objform) {
    var mcaction = objform.mcaction === undefined ? 'list' : objform.mcaction;
    this.routeAction(mcaction, objform);
  }

  , handleHash: function() {
    var self = this;

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));
    self.queryParams.mcaction = self.queryParams.mcaction || 'list';
    self.routeAction(self.queryParams.mcaction);
  }

  , handleSaveContact: function(objform) {
    var self = this;

    Mura
      .getEntity('person')
      .loadBy('personid', objform.personid)
      .then(function(person) {
        var exists = person.get('isnew') === 0 ? true : false;

        if ( !exists ) {
          objform.userid = self.getLoggedInUser().userid;
        }

        person
          .set(objform)
          .save()
          .then(
            function(obj) {
              // success
              var text = exists ? 'Updated!' : 'Added!';
              self.setMessage({text:text, type:'success'});
              self.renderEditContact(objform);
            },
            function(obj) {
              // fail
              var errormessage = muracontacts.templates.errormessages({errors:obj.get('errors')});

              self.setMessage({text:errormessage, type:'danger'});
              self.renderEditContact(objform);
            }
          );
      });
  }

  , handleDeleteContact: function(objform) {
    var self = this;

    Mura
      .getEntity('person')
      .loadBy('personid', objform.pid)
      .then(function(person) {
        person
          .delete()
          .then(
            function(obj) {
              // success
              self.setMessage({text:'Deleted!', type:'success'});
              self.renderList();
            },
            function(obj) {
              // fail
              self.setMessage({text:'Error deleting!', type:'danger'});
            }
          );
      });
  }

  , renderList: function() {
    var self = this
        , loggedInUser = self.getLoggedInUser()
        , userid = loggedInUser.userid;

    if ( window.location.hash.replace(/^#/, '') !== 'mcaction=list') {
      window.location.hash = 'mcaction=list';
    }

    Mura
      .getFeed('person')
      .where()
      .prop('userid')
      .isEQ( userid )
      .getQuery()
      .then(function(people) {
          // success
          self.renderBody(muracontacts.templates.contactlisttable({people:people.get('items')})); // try people.getAll().items;
        },function(e) {
          // error
          console.warn('Error getting PERSON feed');
          console.log(e);
        });
  }

  , renderEditContact: function(objform) {
    var self = this
        , body = ''
        , message = ''
        , pid = objform === undefined || !objform.hasOwnProperty('personid') || !Mura.isUUID(objform.personid)
            ? Mura.createUUID()
            : objform.personid;

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));

    if ( Mura.isEmptyObject(objform) ) {
      pid = self.queryParams.pid !== undefined && Mura.isUUID(self.queryParams.pid) ? self.queryParams.pid : pid;
    }

    // fix URL for new contacts (or anyone messing with the pid in the URL)
    if ( !self.queryParams.hasOwnProperty('pid') || !Mura.isUUID(self.queryParams.pid) ) {
      window.location.hash = 'mcaction=edit&pid=' + pid;
    }

    Mura
      .getBean('person')
      .loadBy('personid', pid)
      .then(
        function(personbean) {
          // success
          var contact = personbean.getAll()
              , body = ''
              , message = '';

          contact.exists = contact.isnew === 0;
          contact.personid = contact.exists ? contact.personid : pid;
          contact.label = contact.exists ? 'Update' : 'Add';

          if ( objform.hasOwnProperty('namefirst') ) {
            contact.namefirst = objform.namefirst;
          }

          if ( objform.hasOwnProperty('namelast') ) {
            contact.namelast = objform.namelast;
          }

          Mura
            .getFeed('personphonenumber')
            .where()
            .prop('personid')
            .isEQ( contact.personid )
            .getQuery()
            .then(function(phonenumbers) {
                // success
                body = muracontacts.templates.editcontact({contact:contact, phonenumbers:phonenumbers.getAll()});
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

  , renderEditPhone: function(objform) {
    var self = this
        , body = ''
        , pid = objform === undefined || !objform.hasOwnProperty('personid') || !Mura.isUUID(objform.personid)
            ? ''
            : objform.personid
        , phonenumberid = objform === undefined || !objform.hasOwnProperty('phonenumberid') || !Mura.usUUID(objform.phonenumberid)
            ? Mura.createUUID()
            : objform.phonenumberid;

    self.queryParams = Mura.getQueryStringParams(window.location.hash.replace(/^#/, ''));

    if ( Mura.isEmptyObject(objform) ) {
      pid = self.queryParams.pid !== undefined && Mura.isUUID(self.queryParams.pid) ? self.queryParams.pid : pid;
      phonenumberid = self.queryParams.phonenumberid !== undefined && Mura.isUUID(self.queryParams.phonenumberid) ? self.queryParams.phonenumberid : phonenumberid;
    }

    // we need a personid ... so send them back to the list
    if ( pid.length === 0 ) {
      return window.location = './';
    }

    // fix URL for new phone numbers
    if ( !self.queryParams.hasOwnProperty('phonenumberid') || !Mura.isUUID(self.queryParams.phonenumberid) ) {
      window.location.hash = 'mcaction=editphone&pid=' + pid + '&phonenumberid=' + phonenumberid;
    }

    Mura
      .getBean('personphonenumber')
      .loadBy('phonenumberid', phonenumberid)
      .then(
        function(phonebean) {
          // success
          var phone = phonebean.getAll()
              , body = ''
              , message = '';

          phone.exists = phone.isnew === 0;
          phone.phonenumberid = phone.exists ? phone.phonenumberid : phonenumberid;
          phone.label = phone.exists ? 'Update' : 'Add';

          if ( objform.hasOwnProperty('phonenumber') ) {
            phone.phonenumber = objform.phonenumber;
          }

          if ( objform.hasOwnProperty('phonetype') ) {
            phone.phonetype = objform.phonetype;
          }

          body = muracontacts.templates.editphone({phone:phone});
          self.renderBody(body, message);
        },
        function(e) {
          // fail
          console.warn('Error getting PHONENUMBER bean');
          console.log(e);
        }
      );

  }

  , renderBody: function(body) {
    var self = this
        , body = body === undefined ? '' : body
        , message = self.getMessage()
        , hasmessage = Object.keys(message).length !== 0
        , loggedInUser = self.getLoggedInUser();

    Mura
      .loader()
      .loadcss(self.getDisplayObjectPath() + '/assets/css/muracontacts.min.css');

    // Wraps body with muracontacts-wrapper div
    self.container
      .html(muracontacts.templates.body({
        body: body
        , hasmessage: hasmessage
        , message: message
        , userfirstname: loggedInUser.fname
      }));

    if ( hasmessage ) {
      setTimeout(function() {
        $('.muracontacts-alert').fadeOut('slow');
        self.setMessage();
      }, 2000);
    }
  }

  , setLoggedInUser: function(loggedInUser) {
    this.loggedInUser = loggedInUser;
  }

  , getLoggedInUser: function() {
    return this.loggedInUser;
  }

  , setMessage: function(message) {
    this.message = message;
  }

  , getMessage: function() {
    return this.message === undefined ? {} : this.message;
  }

  , getDisplayObjectPath: function() {
    // Would need to modify if dropping into a plugin
    return Mura.themepath + '/display_objects/muracontacts';
  }

  // Mura automatically triggers this method for us
  ,registerHelpers: function() {
    var self = this;

    // Example of how to register a helper
    //Mura.Handlebars.registerHelper('helpername', function(arg1, arg2) {});
  }

});
