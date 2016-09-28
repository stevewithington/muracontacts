component
	extends="mura.bean.beanORM"
	table="custom_personphonenumbers"
	entityname="personphonenumber"
	bundleable="true"
	displayname="PersonPhoneNumberBean"
	public=true
	orderby="phonetype" {

	// primary key
		property name="phonenumberid" fieldtype="id";

	// foreign key
		property name="person" fieldtype="many-to-one" cfc="person" fkcolumn="personid" nullable=true;

	// attributes
		property name="phonetype" datatype="varchar" length="255" required=true message="Phone Type is required."; // Home, Office, Mobile, etc.
		property name="phonenumber" datatype="varchar" length="255" required=true message="Phone Number is required.";

		// JSON API Restrictions (used by Mura.js)
			public any function allowDelete(m) {
				return this.getPerson().allowDelete(arguments.m);
			}

			public any function allowSave(m) {
				return this.getPerson().allowSave(arguments.m);
			}

			public any function allowRead(m) {
				return this.getPerson().allowRead(arguments.m);
			}

			public any function allowQueryParams(params, m) {
				return this.getPerson().allowQueryParams(arguments.params, arguments.m);
			}
		// @END JSON API Restrictions

}
