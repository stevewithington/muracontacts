<cfscript>
  param name='message' default={};
  //message = {};

  if ( m.event('mcaction') == 'delete' ) {
    try {

      m.getBean('Person').loadBy(personid=m.event('pid')).delete();

      message = {
        type = 'success'
        , text = '<i class="fa fa-thumbs-o-up"></i> Contact deleted.'
      };



    } catch(any e) {
      message = {
        type = 'danger'
        , text = '<i class="fa fa-thumbs-o-down"></i> #e.message#'
      };
    };
  }
</cfscript>
<script>
  // mura.js
  mura(function() {
    m('.btn-delete').on('click', function(e){
      return confirm('Are you sure?') ? true : e.preventDefault();
    });
  });
</script>
<cfoutput>
  <div class="muracontacts-wrapper">

    <cfif m.currentUser().isLoggedIn()>
      <div class="muracontacts-heading">
        <h2>#esapiEncode('html', m.currentUser('fname'))#'s Contacts</h2>
      </div>
      <cfif m.event('mcaction') eq 'edit'>
        <form class="pad">
          <input type="hidden" name="mcaction" value="list">
          <button type="submit" class="btn btn-primary btn-back">
            <i class="fa fa-arrow-left"></i>
          </button>
        </form>
      </cfif>

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
            <cfinclude template="inc/list.cfm" />
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

  <!--- quick + dirty styling (don't judge) --->
  <style>
    .pad {margin:1em 0;}
    a.btn-back {margin: 0 0 1em 0;}
    td.right {text-align:right;}
    td.addrow {text-align:center;}
    td.addrow a {margin:1em 0;}
    .alert .fa {font-size:1.75em;margin-right:0.25em;}
    form.muracontacts-formlink {display:inline-block;}
  </style>
</cfoutput>
