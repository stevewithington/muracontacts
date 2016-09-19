Mura.DisplayObject.muracontacts=Mura.UI.extend({
  render:function(){
    // objectparams are available under 'this.context.{yourVar}'
    this.setup();
  }

  , setup:function() {
    Mura(this.context.targetEl).html(muracontacts.templates.example({exampleVar:"hello steve!"}));

    // move into wherever needed
    m('.btn-delete').on('click', function(e){
      return confirm('Are you sure?') ? true : e.preventDefault();
    });

  }

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
