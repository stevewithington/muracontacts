<cfparam name="objectParams.muracontactstitle" default="">
<cf_objectconfigurator>
    <cfoutput>
        <div class="mura-control-group">
            <label class="mura-control-label">MuraContacts Title</label>
            <input type="text" name="muracontactstitle" class="objectParam" value="#esapiEncode('html_attr',objectParams.muracontactstitle)#"/>
        </div>
    </cfoutput>
</cf_objectconfigurator>
