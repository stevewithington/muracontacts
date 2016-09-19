<cfscript>
  if ( !IsValid('uuid', m.event('pid')) ) {
    m.event('pid', CreateUUID());
  }

  label = 'Add';

  try {
    // Contact Bean
    contactBean = m.getBean('Person').loadBy(personid=m.event('pid'));

    if ( contactBean.getIsNew() ) {
      contactBean
        .set('userid', m.currentUser('userid'))
        .set('siteid', m.event('siteid'));
    } else {
      label = 'Edit';
    }

    // Phone Number(s)
    itPhoneNumbers = contactBean.getPhoneNumbersIterator();

  } catch(any e) {
    // Don't crash
    WriteDump(e);abort;
  }

  // Save Form
  if ( m.event('issubmitted') == true ) {

    // Validate CSRF Tokens
    if ( m.validateCSRFTokens(context=contactBean.get('personid')) ) {
      // Tokens match
      message = contactBean.getIsNew() ? 'Added!' : 'Updated!';

      result = contactBean
                .set('namefirst', form.namefirst)
                .set('namelast', form.namelast)
                .save();

      errors = result.get('errors');
    } else {
      // Tokens don't match
      errors = {
        error1 = 'Unable to save due to invalid CSRF tokens.'
      };
    }

  }
</cfscript>

<cfoutput>
  <div class="pad">
    <a class="btn btn-primary" href="./?mcaction=list">
      <i class="fa fa-arrow-left"></i>
    </a>

    <!--- Delete --->
    <cfif !contactBean.getIsNew()>
      <form method="post" class="muracontacts-formlink" action="./?mcation=list">
        <input type="hidden" name="mcaction" value="delete">
        <input type="hidden" name="pid" value="#m.event('pid')#">
        <button type="submit" class="btn btn-danger btn-delete">
          <i class="fa fa-trash"></i>
        </button>
      </form>
    </cfif>
  </div>

  <h3>#label# Contact</h3>

  <!--- Messaging --->
    <cfif m.event('issubmitted') eq 'true'>
      <cfif IsDefined('errors') && StructCount(errors)>
        <div class="alert alert-danger">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4><i class="fa fa-exclamation-triangle"></i> Ooops!</h4>
          <ul>
            <cfloop collection="#errors#" item="e">
              <li>#errors[e]#</li>
            </cfloop>
          </ul>
        </div>
      <cfelse>
        <div class="alert alert-success">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4>#message#</h4>
        </div>
      </cfif>
    </cfif>
  <!--- @End Messaging --->

  <form method="post" class="pad">
    <div class="form-group">
      <label for="namefirst">First Name</label>
      <input type="text" class="form-control" name="namefirst" value="#contactBean.get('namefirst')#">
    </div>
    <div class="form-group">
      <label for="namelast">Last Name</label>
      <input type="text" class="form-control" name="namelast" value="#contactBean.get('namelast')#">
    </div>

    <input type="hidden" name="mcaction" value="edit">
    <input type="hidden" name="pid" value="#m.event('pid')#">
    <input type="hidden" name="issubmitted" value="true">

    <!--- Cross-Site Request Forgery (CSRF) Tokens --->
    #$.renderCSRFTokens(format='form', context=m.event('pid'))#

    <button type="submit" class="btn btn-primary">
      <i class="fa fa-floppy-o"></i>
    </button>
    <a class="btn btn-default" href="./?mcaction=list"><i class="fa fa-ban"></i></a>
  </form>

  <!--- Phone Number(s) --->
    <cfif !contactBean.getIsNew()>
      <div class="row">
        <div class="col-md-12">
          <!--- itPhoneNumbers --->
          <cfif itPhoneNumbers.hasNext()>
            <label>Phone Numbers</label>
            <ul class="nav muracontacts-phonenumbers">
              <cfloop condition="#itPhoneNumbers.hasNext()#">
                <cfset phone = itPhoneNumbers.next()>
                <li class="muracontacts-phonenumber">
                  <!--- Edit --->
                  <a class="btn btn-sm btn-primary" href="./?mcaction=editphone&amp;pid=#contactBean.get('personid')#&amp;phoneid=#phone.get('phonenumberid')#">
                    <i class="fa fa-pencil"></i>
                  </a>

                  <!--- Phone Number --->
                  <a class="btn" href="tel:#esapiEncode('html_attr', phone.get('phonenumber'))#">
                    #esapiEncode('html', phone.get('phonenumber'))#
                    <strong>#esapiEncode('html', phone.get('phonetype'))#</strong>
                  </a>
                </li>
              </cfloop>
            </ul>
          </cfif>

          <!--- Add Phone --->
          <div class="pad">
            <a class="btn btn-success btn-sm muracontacts-addphone-button" href="./?mcaction=editphone&amp;pid=#contactBean.get('personid')#">
              <i class="fa fa-plus"></i> Phone
            </a>
          </div>
        </div>
      </div>
    </cfif>
  <!--- @End Phone Number(s) --->
</cfoutput>
