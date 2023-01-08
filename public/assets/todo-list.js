$(document).ready(function () {

  $('form').on('submit', function () {
    //------------------1----------------------

    // alert('submited')
    //getting the submitted input
    var item = $('form input');

    //injecting it's value in the todo variable, on key value pairs
    var todo = { item: item.val() };

    // alert(todo.item);

    //making a url ajax request, which will be handled in the app.js
    $.ajax({
      type: 'POST',
      url: '/todo',
      //we pass the submitted value which we stored in the todo variable, as a data
      data: todo,

      //------------------3----------------------
//we get the data from the Controller's post handlers method
      success: function (data) {
        //do something with the data via front-end framework like React JS
        location.reload();
      }
    });

    return false;

  });

  $('li').on('click', function () {
    //replacing the spaces in the items with "-"
    var item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
  });

});
