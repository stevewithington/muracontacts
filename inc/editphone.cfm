<cfscript>
  phonetypes = ['Home', 'Work', 'Other', 'Mobile', 'Main', 'Home Fax', 'Work Fax'];

  if ( !IsValid('uuid', m.event('phoneid')) ) {
    m.event('phoneid', CreateUUID());
  }

  label = 'Add';

  try {
    // Person Bean
    personBean = m.getBean('person').loadBy(personid=m.event('pid'));

    // PhoneNumber Bean
    phoneNumberBean = m.getBean('personPhoneNumber').loadBy(phonenumberid=m.event('phoneid'));

    label = phoneNumberBean.getIsNew() ? 'Add' : 'Update';
  } catch(any e) {
    // Don't crash
    WriteDump(e);abort;
  }

  // Save Form
  if ( m.event('issubmitted') == true ) {

    // Validate CSRF Tokens
    if ( m.validateCSRFTokens(context=phoneNumberBean.get('phonenumberid')) ) {
      // Tokens match
      message = phoneNumberBean.getIsNew() ? 'Added!' : 'Updated!';

      result = phoneNumberBean
                .set('personid', form.pid)
                .set('phonetype', form.phonetype)
                .set('phonenumber', form.phonenumber)
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
    <a class="btn btn-primary" href="./?mcaction=edit&amp;pid=#m.event('pid')#">
      <i class="fa fa-arrow-left"></i>
    </a>

    <!--- Delete --->
    <form class="muracontacts-formlink">
      <input type="hidden" name="mcaction" value="deletephone">
      <input type="hidden" name="phoneid" value="#m.event('phoneid')#">
      <button type="submit" class="btn btn-danger btn-delete">
        <i class="fa fa-trash"></i>
      </button>
    </form>
  </div>

  <h3>#esapiEncode('html', personBean.get('fullname'))#</h3>
  <h4>#label# Phone</h4>

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

  <form method="post">
    <div class="form-group">
      <label for="phonenumber">Phone Number</label>
      <input type="text" class="form-control" name="phonenumber" value="#phoneNumberBean.get('phonenumber')#">
    </div>
    <div class="form-group">
      <label for="phonetype">Phone Type</label>
      <select name="phonetype" class="form-control">
        <option value="">- Select -</option>
        <cfloop array="#phonetypes#" index="phonetype">
          <option value="#phonetype#"<cfif phoneNumberBean.get('phonetype') eq phonetype> selected="selected"</cfif>>
            #phonetype#
          </option>
        </cfloop>
      </select>
    </div>

    <input type="hidden" name="mcaction" value="editphone">
    <input type="hidden" name="pid" value="#m.event('pid')#">
    <input type="hidden" name="phoneid" value="#m.event('phoneid')#">
    <input type="hidden" name="issubmitted" value="true">

    <!--- Cross-Site Request Forgery (CSRF) Tokens --->
    #$.renderCSRFTokens(format='form', context=m.event('phoneid'))#

    <button type="submit" class="btn btn-primary">
      <i class="fa fa-floppy-o"></i>
    </button>
    <a class="btn btn-default" href="./?mcaction=edit&amp;pid=#m.event('pid')#"><i class="fa fa-ban"></i></a>
  </form>
</cfoutput>
