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
		property name="phonetype" datatype="varchar" length="255" nullable=true; // Home, Office, Mobile, etc.
		property name="phonenumber" datatype="varchar" length="255" nullable=true;

	// Custom Validations
		public any function validate() {
			var obj = super.validate();
			var errors = obj.getErrors();

			// Validate required fields with custom error messages
				if ( !Len(obj.get('phonetype')) ) {
					errors.phonetype = 'Phone Type is required.';
				}

				if ( !Len(obj.get('phonenumber')) ) {
					errors.phonenumber = 'Phone Number is required.';
				}

			return this;
		}

}
