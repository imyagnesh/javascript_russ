import t from './data';

const view = {
  displayTodos() {
    const todoUl = document.getElementById('todoList');
    todoUl.innerHTML = '';
    t.todos.forEach(todo => {
      const todoLi = document.createElement('li');
      todoLi.id = todo.id;
      todoLi.textContent = todo.todoText;
      if (todo.isDone) {
        todoLi.style = 'text-decoration: line-through';
      }
      todoLi.appendChild(this.createDeleteButton());
      todoLi.appendChild(this.createToggleButton(todo.isDone));
      todoUl.appendChild(todoLi);
    });
  },
  createDeleteButton() {
    const deleteButton = document.createElement('i');
    deleteButton.className = 'deleteButton far fa-trash-alt';
    return deleteButton;
  },
  createToggleButton(isDone) {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggleButton btn';
    toggleButton.textContent = isDone ? 'Not Done' : 'Done';
    return toggleButton;
  },
  pedningTodos() {
    const todoUl = document.getElementById('todoList');
    todoUl.innerHTML = '';
    t.todos
      .filter(x => !x.isDone)
      .forEach(todo => {
        const todoLi = document.createElement('li');
        todoLi.id = todo.id;
        todoLi.textContent = todo.todoText;
        if (todo.isDone) {
          todoLi.style = 'text-decoration: line-through';
        }
        todoLi.appendChild(this.createDeleteButton());
        todoLi.appendChild(this.createToggleButton(todo.isDone));
        todoUl.appendChild(todoLi);
      });
  },
  completedTodos() {
    const todoUl = document.getElementById('todoList');
    todoUl.innerHTML = '';
    t.todos
      .filter(x => x.isDone === true)
      .forEach(todo => {
        const todoLi = document.createElement('li');
        todoLi.id = todo.id;
        todoLi.textContent = todo.todoText;
        if (todo.isDone) {
          todoLi.style = 'text-decoration: line-through';
        }
        todoLi.appendChild(this.createDeleteButton());
        todoLi.appendChild(this.createToggleButton(todo.isDone));
        todoUl.appendChild(todoLi);
      });
  },
};

export default view;
