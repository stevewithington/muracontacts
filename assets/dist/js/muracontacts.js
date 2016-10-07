Mura(function(m) {

  m('body').on('click', '.muracontacts-wrapper .btn-delete', function(e){
    return confirm('Are you sure?') ? true : e.preventDefault();
  });

});
