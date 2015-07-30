// add scripts

$(document).on('ready', function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var toDo = $('input').val();
    $('#all-todos').prepend('<li><h2>'+toDo+
      '&nbsp;<button class="btn btn-danger btn-sm">X</button></h2></li>');
  });

  //removes list item when clicking the 'x' button
  $('ul').on('click','button',function(){
    console.log($(this).parent().parent());
    $(this).parent().parent().remove();
  });

});
