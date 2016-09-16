<cfscript>
  param name='message' default={};
  if ( !Len(m.event('mcaction')) ) {
    m.event('mcaction', 'list');
  }

  // Delete
    if ( m.event('mcaction') == 'delete' ) {
      try {
        m.getBean('Person').loadBy(personid=m.event('pid')).delete();
        m.event('mcaction', 'list');
        message = {
          type = 'success'
          , text = '<i class="fa fa-thumbs-o-up"></i> Contact deleted.'
        };
      } catch(any e) {
        m.event('mcaction', 'list');
        message = {
          type = 'danger'
          , text = '<i class="fa fa-thumbs-o-down"></i> #e.message#'
        };
      };
    }

  // @End Delete
</cfscript>

<script>
  // mura.js
  m(function() {
    m('.btn-delete').on('click', function(e){
      return confirm('Are you sure?') ? true : e.preventDefault();
    });

    // m('#muracontact-addphone').on('click', function(e){
    //   e.preventDefault();
    // });
  });
</script>

<cfoutput>
  <div class="muracontacts-wrapper">

    <cfif m.currentUser().isLoggedIn()>
      <div class="muracontacts-heading">
        <h2>#esapiEncode('html', m.currentUser('fname'))#'s Contacts</h2>
      </div>

      <!--- Messaging --->
      <cfif !StructIsEmpty(message)>
        <div class="muracontacts-alert alert alert-#message.type# alert-dismissible" role="alert">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <p>#message.text#</p>
        </div>
      </cfif>

      <!--- Body --->
      <div class="muracontacts-body">
        <cftry>
          <cfinclude template="inc/#LCase(m.event('mcaction'))#.cfm" />
          <cfcatch>
            <cfdump var="#cfcatch#">
          </cfcatch>
        </cftry>
      </div>

    <cfelse>
      <!--- Not Logged In --->
      <div class="muracontacts-heading">
        <h2>MuraContacts</h2>
      </div>
      <p class="alert alert-info">You must be logged in to use <strong>MuraContacts</strong></p>
    </cfif>

  </div>
  <!--- @End .muracontacts-wrapper --->

  <!--- quick + dirty styling (don't judge) --->
  <style>
    .pad {margin:1em 0;}
    a.btn-back {margin: 0 0 1em 0;}
    td.right {text-align:right;}
    td.addrow {text-align:center;}
    td.addrow a {margin:1em 0;}
    .alert .fa {font-size:1.75em;margin-right:0.25em;}
    form.muracontacts-formlink {display:inline-block;}
    form ul.muracontacts-phonenumbers {padding:0;margin:0 0 1em 0;}
    ul li.muracontacts-phonenumber > a {display:inline-block;}
    a[href^="tel:"]:before {
      content: "\260E";
      display:inline-block;
      margin-right: 0.5em;
    }
  </style>
</cfoutput>
