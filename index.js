import './styles/index.css';
import handlers from './handlers';

function registerEventListners() {
  handlers.loadTodos();
  const todoUl = document.getElementById('todoList');
  todoUl.addEventListener('click', event => {
    if (event.target.className === 'deleteButton far fa-trash-alt') {
      handlers.deleteTodo(event.target.parentNode.id);
    }
    if (event.target.className === 'toggleButton btn') {
      handlers.toggleTodo(event.target.parentNode.id);
    }
  });
  const addTodo = document.getElementById('add-todo');
  addTodo.addEventListener('click', () => {
    handlers.addTodo();
  });
  const completeAllTodo = document.getElementById('complete-all-todo');
  completeAllTodo.addEventListener('click', () => {
    handlers.completeAllTodo();
  });
}

registerEventListners();
