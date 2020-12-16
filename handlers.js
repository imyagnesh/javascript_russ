import t from './data';
import view from './view';

const handlers = {
  addTodo: async () => {
    const addTodoText = document.getElementById('addTodoText');
    await t.addTodo(addTodoText.value);
    addTodoText.value = '';
    view.displayTodos();
  },
  deleteTodo: async id => {
    await t.deleteTodo(id);
    view.displayTodos();
  },
  toggleTodo: async id => {
    await t.toggleTodo(id);
    view.displayTodos();
  },
  completeAllTodo: async () => {
    await t.togleAllTodo();
    view.displayTodos();
  },
  loadTodos: async () => {
    await t.loadData();
    view.displayTodos();
  },
};

export default handlers;
