// https://www.mobx.org.cn/
import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];
  todoText = 'Todo List';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.todoText = 'Todo List add'
  }

  removeTodo(index) {
    this.todos.splice(index, 1);
    this.todoText = 'Todo List remove'
  }
}

const todoStore = new TodoStore();
export default todoStore;
