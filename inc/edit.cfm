<cfscript>
  if ( !IsValid('uuid', m.event('pid')) ) {
    m.event('pid', CreateUUID());
  }

  label = 'Add';

  // Load Up Contact
  try {
    contactBean = m.getBean('Person').loadBy(personid=m.event('pid'));

    if ( contactBean.getIsNew() ) {
      contactBean
        .set('userid', m.currentUser('userid'))
        .set('siteid', m.event('siteid'));
    } else {
      label = 'Edit';
    }
  } catch(any e) {
    // Don't crash
  }

  // Save Form
  if ( m.event('issubmitted') == true ) {
    message = contactBean.getIsNew() ? 'Added!' : 'Updated!';

    result = contactBean
              .set('namefirst', form.namefirst)
              .set('namelast', form.namelast)
              .save();

    errors = result.get('errors');
  }
</cfscript>

<cfoutput>
  <h3>#label# Contact</h3>

  <cfif m.event('issubmitted') eq 'true'>

    <cfif IsDefined('errors') && StructCount(errors)>
      <div class="alert alert-danger">
        <h4>Please review the following issue<cfif StructCount(errors) gt 1>s</cfif>:</h4>
        <ul>
          <cfloop collection="#errors#" item="e">
            <li>#errors[e]#</li>
          </cfloop>
        </ul>
      </div>
    <cfelse>
      <div class="alert alert-success">
        <h4>#message#</h4>
      </div>
    </cfif>
  </cfif>

  <form method="post">
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

    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</cfoutput>
