function appendtext() {
    var input = document.getElementById('add');
    var todoText = input.value;

    if (todoText === "") {
        alert("Please enter a todo item.");
        return;
    }
    var todoItem = document.createElement('div');
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.type = "submit";
    // deleteButton.id = 'delete';
    todoItem.innerHTML = todoText;
    todoItem.classList.add('todo-item');
    var container = document.getElementsByClassName('container')[0];
    container.appendChild(todoItem);
    todoItem.appendChild(deleteButton);
    deleteButton.onclick = function() { deleteTodo(todoItem); };
    input.value = "";
    function deleteTodo(todo){
    todoItem.remove(todo);
    }
}

