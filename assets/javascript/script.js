var todos = [
  {
    id: 1,
    text: 'learn javascript',
    complete: false
  },
  {
    id: 2,
    text: 'eat pizza',
    complete: true
  }
];

var id = todos.length;

function incrementId() {
  id++;
  return id;
}

function renderTotals() {
  $('stats').html('')
}

function renderTodos() {
  $('.todos').html('');
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      //Had to figure out what the hell this is. This is called a ternery - it's an alternate way of writing an if/else statement
      var checked = todo.complete ? 'checked' : '';
      //----------------NEW FEATURE---------------\\
      //Create a 2nd ternery that checks completion. If it is complete, add a .css style that iwll give it a line-through
      var listClass = todo.complete ? 'todo completed' : 'todo';
      $('.todos').append("<li class='" + listClass + "' data-id=" + todo.id + "><label><input class='toggle-todo' type='checkbox' " + checked + "/> " + todo.text + "</label></li>");
    }
    //----------------BUG FIX---------------\\
    //after the new to do is rendered, clear the value of the .todo-text form field
    $('.todo-text').val("");
}

function findById(id) {
  var todo;

  for(var i = 0; i < todos.length; i++) {
    if (todos[i].id === Number(id)) {
      todo = todos[i];
    }
  }

  return todo;
}

$(document).ready(function() {
  renderTodos();

  $(document).on('change', '.toggle-todo', function(event) {
    var id = $(event.target).parent().parent().data('id');
    var todo = findById(id);

    todo.complete = event.target.checked;
    renderTodos();
  });


  $(document).on('submit', '.new-todo', function(event) {
    event.preventDefault();

    var text = $('.todo-text').val();

    //----------------BUG FIX---------------\\
    //insert an if/else to check the length of the text variable (the value of .todo-text)
    if (text.length > 0) {
        var newTodo = {
          id: incrementId(),
          text: text,
          completed: false
          };
        todos.push(newTodo);
        renderTodos();
      }
      else{
        alert("What do ya say you quit playing games and actually put some text in the box?");
      }
 
  });

});
