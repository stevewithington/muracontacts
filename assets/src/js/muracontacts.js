Mura(function(m) {

  m('.btn-delete').on('click', function(e){
    return confirm('Are you sure?') ? true : e.preventDefault();
  });

});
