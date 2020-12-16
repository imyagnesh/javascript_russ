class TodoList {
  constructor(todos = []) {
    this.todos = todos;
  }

  loadData = async () => {
    try {
      const res = await fetch('http://localhost:3000/todoList');
      const todos = await res.json();
      this.todos = todos;
    } catch (error) {
      console.error(error);
    }
  };

  addTodo = async todoText => {
    try {
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({ todoText, isDone: false }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const todo = await res.json();
      this.todos.push(todo);
    } catch (error) {
      console.error(error);
    }
  };

  toggleTodo = async id => {
    try {
      const index = this.todos.findIndex(x => `${x.id}` === `${id}`);
      const res = await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...this.todos[index], isDone: !this.todos[index].isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const updatedTodo = await res.json();

      this.todos = [...this.todos.slice(0, index), updatedTodo, ...this.todos.slice(index + 1)];
    } catch (error) {
      console.error(error);
    }
  };

  deleteTodo = async id => {
    try {
      const index = this.todos.findIndex(x => `${x.id}` === `${id}`);
      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });
      this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)];
    } catch (error) {
      console.error(error);
    }
  };

  togleAllTodo = async () => {
    const apis = [];
    for (let i = 0; i < this.todos.length; i += 1) {
      apis.push(
        fetch(`http://localhost:3000/todoList/${this.todos[i].id}`, {
          method: 'PUT',
          body: JSON.stringify({ ...this.todos[i], isDone: !this.todos[i].isDone }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }),
      );
    }
    const responses = await Promise.all(apis);
    const jsonRes = [];
    for (let i = 0; i < responses.length; i += 1) {
      jsonRes.push(responses[i].json());
    }
    this.todos = await Promise.all(jsonRes);
  };
}

const t = new TodoList();

export default t;
