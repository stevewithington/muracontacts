Mura(function(m) {

  console.log(m);

  Mura('.btn-delete').on('click', function(e){
    return confirm('Are you sure?') ? true : e.preventDefault();
  });

});
