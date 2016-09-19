<cfscript>
  // Contacts Iterator (using M7+ feed syntax)
  itContacts = m
                .getFeed('person')
                .where()  // .where() is optional ... but it makes more sense
                .prop('userid')
                .isEQ( m.currentUser('userid') )
                .getIterator();
</cfscript>

<cfoutput>
  <div class="table-responsive">
    <table class="table table-condensed table-hover">

      <thead>
        <tr>
          <th>Name</th>
          <th>&nbsp;</th>
        </tr>
      </thead>

      <cfif itContacts.hasNext()>
        <cfloop condition="#itContacts.hasNext()#">
          <!--- Queue up the next contact in the iterator --->
          <cfset contact = itContacts.next()>
          <tr>

            <!--- Contact Name --->
            <td>
              <a class="btn" href="./?mcaction=edit&amp;pid=#contact.get('personid')#">
                #esapiEncode('html', contact.getFullName())#
              </a>
            </td>

            <td class="right">
              <!--- Edit --->
              <a class="btn btn-success" href="./?mcaction=edit&amp;pid=#contact.get('personid')#">
                <i class="fa fa-pencil"></i>
              </a>

              <!--- Delete --->
              <form class="muracontacts-formlink">
                <input type="hidden" name="mcaction" value="delete">
                <input type="hidden" name="pid" value="#contact.get('personid')#">
                <button type="submit" class="btn btn-danger btn-delete">
                  <i class="fa fa-trash"></i>
                </button>
              </form>
            </td>

          </tr>
        </cfloop>

      <cfelse>

        <!--- No Contacts --->
        <tr>
          <td colspan="2" class="info">
            <i class="fa fa-info-circle"></i> No contacts exist yet.
          </td>
        </tr>

      </cfif>

      <!--- Plus Sign to Add Contact --->
      <tfoot>
        <tr>
          <td colspan="3" class="addrow">
            <a class="btn btn-primary" href="./?mcaction=edit&amp;pid=">
          	   <i class="fa fa-plus"></i>
            </a>
          </td>
        </tr>
      </tfoot>

    </table>
    <!--- @End Table --->
  </div>
</cfoutput>
