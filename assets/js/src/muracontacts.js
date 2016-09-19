Mura.DisplayObject.muracontacts=Mura.UI.extend({
  render:function(){
    // objectparams are available under 'this.context.{yourVar}'
    this.setup();
  }

  , setup:function() {
    this.queryParams=Mura.getQueryURLParams(location.search);
    this.queryParams.mcaction=this.queryParams.mcaction || 'list';

    if(this.queryParams.mcaction=='list'){
      this.renderList();
    } else {
      this.renderForm();
    }

  }

  , renderList:function(){
      Mura(this.context.targetEl).html(muracontacts.templates.example({exampleVar:"I'm a list"}));
      this.wireUpMarkup();
  }

  , renderForm:function(){
      Mura(this.context.targetEl).html(muracontacts.templates.example({exampleVar:"I'm a form"}));
      this.wireUpMarkup();
  }

  , wireUpMarkup:function(){
      Mura(this.context.targetEl).find('.btn-delete').on('click', function(e){
        return confirm('Are you sure?') ? true : e.preventDefault();
      });
  }

  // ,getQueryStringParams:function(queryString) {
	//     var params = {};
	//     var e,
	//         a = /\+/g,  // Regex for replacing addition symbol with a space
	//         r = /([^&;=]+)=?([^&;]*)/g,
	//         d = function (s) { return decodeURIComponent(s.replace(a, " ")); };
  //
	//         if(queryString.substring(0,1)=='?'){
	//         	var q=queryString.substring(1);
	//         } else {
	//         	var q=queryString;
	//         }
  //
  //
	//     while (e = r.exec(q))
	//        params[d(e[1]).toLowerCase()] = d(e[2]);
  //
	//     return params;
	// }

  // ,registerHelpers: function() {
  //   var self = this;
  //
  //   Mura.Handlebars.registerHelper('eachColRow',function(row, columns, options) {
  //     var ret = "";
  //     for(var i = 0;i < columns.length;i++) {
  //       ret = ret + options.fn(row[columns[i].column]);
  //     }
  //     return ret;
  //   });
  // }
});
