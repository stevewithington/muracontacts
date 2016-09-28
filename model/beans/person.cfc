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
		property name="datecreated" datatype="datetime";
		property name="datemodified" datatype="datetime";

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

		// Custom getAllValues() ~ Needed for Mura.js to set custom attributes on object
			public any function getAllValues(){
				var values = super.getAllValues();
				values.fullname = this.getFullName();
				return values;
			}

		// JSON API Restrictions (used by Mura.js)
			public any function allowDelete(m) {
				// verify the user is deleting their own contact, and not someone else's
				return arguments.m.currentUser('userid') == this.get('userid');
			}

			public any function allowSave(m) {
				return this.exists() ? arguments.m.currentUser('userid') == this.get('userid') : true;
			}

			public any function allowRead(m) {
				return this.exists() ? arguments.m.currentUser('userid') == this.get('userid') : true;
			}

			public any function allowQueryParams(params, m) {
				if ( StructKeyExists(arguments.params, getPrimaryKey()) ) {
					var args = {'#getPrimaryKey()#'=arguments.params[getPrimaryKey()]};
					this.loadBy(argumentCollection=args);
				}

				return this.exists() ? arguments.m.currentUser('userid') == this.get('userid') : true;
			}
		// @END JSON API Restrictions

		// Custom Methods
			public any function getFullName() {
				return get('namefirst') & ' ' & get('namelast');
			}
		// @end Custom Methods
}
