<cfscript>
  param name='message' default={};

  if ( !ListFind('list,edit,editphone,delete', LCase(m.event('mcaction'))) ) {
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
              <!--- In case one of the include files has an error --->
              <cfdump var="#cfcatch#">
            </cfcatch>
          </cftry>
        </div>

    <cfelse>
      <!--- Not Logged In --->
      <div class="muracontacts-heading">
        <h2>MuraContacts</h2>
      </div>
      <p class="alert alert-info">You must be <a href="./?display=login">logged in</a> to use <strong>MuraContacts</strong></p>
    </cfif>

  </div>
  <!--- @End .muracontacts-wrapper --->
</cfoutput>

<script>
  // mura.js
  Mura(function(m) {
    m.loader()
     .loadcss(m.themepath + '/display_objects/muracontacts/assets/dist/css/muracontacts.min.css')
     .loadjs(m.themepath + '/display_objects/muracontacts/assets/dist/js/muracontacts.min.js');
  });
</script>
