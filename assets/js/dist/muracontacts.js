this["muracontacts"] = this["muracontacts"] || {};
this["muracontacts"]["templates"] = this["muracontacts"]["templates"] || {};

this["muracontacts"]["templates"]["example"] = window.mura.Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>"
    + container.escapeExpression(((helper = (helper = helpers.exampleVar || (depth0 != null ? depth0.exampleVar : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"exampleVar","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"useData":true});;Mura.DisplayObject.muracontacts=Mura.UI.extend({
  render:function(){
    // objectparams are available under 'this.context.{yourVar}'

    this.example();
    // Mura(this.context.targetEl).html(muracontacts.templates.example({exampleVar:"hello steve!"}));

    //render templates

    m('.btn-delete').on('click', function(e){
      return confirm('Are you sure?') ? true : e.preventDefault();
    });
  }

  , example:function() {
    Mura(this.context.targetEl).html(muracontacts.templates.example({exampleVar:"hello steve!"}));
  }
});
