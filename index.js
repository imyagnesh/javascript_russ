import './styles/index.css';
import handlers from './handlers';

// const options = {
//   enableHighAccuracy: true,
//   timeout: 5000,
//   maximumAge: 0,
// };

// function success(pos) {
//   console.log(pos);
// }

// function error(err) {}

console.log(navigator.userAgent);
// navigator.geolocation.watchPosition(success, error, options);

console.log(window.innerWidth);
console.log(window.innerHeight);

window.scrollBy(100, 100);

// setTimeout(() => {
//   console.log('called after 10 seconds');
// }, 10000);

// setInterval(() => {
//   console.log('call after every 1 seconds');
// }, 1000);

// const dbName = 'the_name';

// var request = indexedDB.open(dbName, 2);

// request.onerror = function (event) {
//   // Handle errors.
// };
// request.onupgradeneeded = function (event) {
//   var db = event.target.result;

//   // Create an objectStore to hold information about our customers. We're
//   // going to use "ssn" as our key path because it's guaranteed to be
//   // unique - or at least that's what I was told during the kickoff meeting.
//   var objectStore = db.createObjectStore('customers', { keyPath: 'ssn' });

//   // Create an index to search customers by name. We may have duplicates
//   // so we can't use a unique index.
//   objectStore.createIndex('name', 'name', { unique: false });

//   // Create an index to search customers by email. We want to ensure that
//   // no two customers have the same email, so use a unique index.
//   objectStore.createIndex('email', 'email', { unique: true });

//   // Use transaction oncomplete to make sure the objectStore creation is
//   // finished before adding data into it.
//   objectStore.transaction.oncomplete = function (event) {
//     // Store values in the newly created objectStore.
//     var customerObjectStore = db.transaction('customers', 'readwrite').objectStore('customers');
//     customerData.forEach(function (customer) {
//       customerObjectStore.add(customer);
//     });
//   };
// };
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

  const pendingTodos = document.getElementById('pending-todos');
  pendingTodos.addEventListener('click', () => {
    handlers.displayPandingTodos();
  });

  const completedTodo = document.getElementById('completed-todos');
  completedTodo.addEventListener('click', () => {
    handlers.diplayCompletdTodos();
  });

  const allTodo = document.getElementById('all-todos');
  allTodo.addEventListener('click', () => {
    handlers.displayAllTodos();
  });
}

// localStorage.setItem('test', 'test 123');
sessionStorage.setItem('test', 'test 123');

// const data = sessionStorage.getItem('test')

registerEventListners();
