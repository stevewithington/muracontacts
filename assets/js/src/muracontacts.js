// Compile and minify under /dist/muracontacts.min.js

m('.btn-delete').on('click', function(e){
  return confirm('Are you sure?') ? true : e.preventDefault();
});
