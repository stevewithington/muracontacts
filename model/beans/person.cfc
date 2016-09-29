component
	extends="mura.bean.beanORM"
	table="custom_persons"
	entityname="person"
	bundleable="true"
	displayname="PersonBean"
	public=true
	orderby="namelast,namefirst" {

	// primary key
		property name="personid" fieldtype="id";

	// foreign key (pre-defined bean by Mura)
		property name="site" cfc="site" fieldtype="many-to-one" fkcolumn="siteid";
		property name="user" cfc="user" fieldtype="many-to-one" fkcolumn="userid";

	// person attributes
		property name="namefirst" datatype="varchar" length="255" required=true message="First Name is required.";
		property name="namelast" datatype="varchar" length="255" required=true message="Last Name is required.";

	// hidden
		property name="datecreated" datatype="datetime" nullable=true;
		property name="datemodified" datatype="datetime" nullable=true;

	// relationships
		property
			name="phonenumbers"
			singularname="phonenumber"
			cfc="personphonenumber"
			fieldtype="one-to-many"
			loadkey="personid"
			cascade="delete"
			orderby="phonetype";

		// property
		// 	name="addresses"
		// 	singularname="address"
		// 	cfc="personaddress"
		// 	fieldtype="one-to-many"
		// 	loadkey="personid"
		// 	cascade="delete"
		// 	orderby="addresstype";

		// Custom Validations
			public any function validate() {
				var obj = super.validate();
				var errors = obj.getErrors();

				// Hidden Form Fields
					obj.set('datemodified', Now());

					if ( !Len(obj.get('datecreated')) ) {
						obj.set('datecreated', Now());
					}

				return this;
			}

		// Custom Methods
			public any function getFullName() {
				return get('namefirst') & ' ' & get('namelast');
			}

		// @end Custom Methods
}
