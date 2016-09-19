Mura.DisplayObject.muracontacts=Mura.UI.extend({
  render:function(){
    Mura(this.context.targetEl).html('hello world!');

    //render templates

    m('.btn-delete').on('click', function(e){
      return confirm('Are you sure?') ? true : e.preventDefault();
    });
  }
});
