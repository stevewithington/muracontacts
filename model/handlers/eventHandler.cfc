component output="false" extends="mura.cfobject" {
  // Place any custom event handler methods in here and they will automatically be registered
  // Be sure to reload the application after you make any changes
  function onRenderStart(m){
    m.addToHTMLHeadQueue('<script src="#m.siteConfig().getThemeAssetPath()#/display_objects/muracontacts/assets/dist/js/muracontacts.min.js"></script>');
  }
}
