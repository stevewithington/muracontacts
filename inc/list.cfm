<cfscript>
  // Contacts Iterator
  itContacts = m
                .getFeed('person')
                .where()
                .prop('userid')
                .isEQ(m.currentUser('userid'))
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
              <form class="muracontacts-formlink">
                <input type="hidden" name="mcaction" value="edit">
                <input type="hidden" name="pid" value="#contact.get('personid')#">
                <button class="btn btn-link">
                  #esapiEncode('html', contact.getFullName())#
                </button>
              </form>
            </td>

            <td class="right">
              <!--- Edit --->
              <form class="muracontacts-formlink">
                <input type="hidden" name="mcaction" value="edit">
                <input type="hidden" name="pid" value="#contact.get('personid')#">
                <button type="submit" class="btn btn-default">
                  <i class="fa fa-pencil"></i>
                </button>
              </form>
              <!--- Delete --->
              <form class="muracontacts-formlink">
                <input type="hidden" name="mcaction" value="delete">
                <input type="hidden" name="pid" value="#contact.get('personid')#">
                <button type="submit" class="btn btn-default btn-delete">
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
            <form class="pad">
              <input type="hidden" name="mcaction" value="edit">
              <button type="submit" class="btn btn-primary">
            	   <i class="fa fa-plus"></i>
              </button>
            </form>
          </td>
        </tr>
      </tfoot>

    </table>
    <!--- @End Table --->
  </div>
</cfoutput>
