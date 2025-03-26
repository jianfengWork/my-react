import React from 'react';
import { observer } from 'mobx-react';
import todoStore from './store/mobx';
import { Button } from 'antd';

const MobX = observer(() => {

  const handleAddTodo = () => {
    const newTodo = prompt("Enter a new todo:");
    if (newTodo) {
      todoStore.addTodo(newTodo);
    }
  };

  const handleRemoveTodo = (index) => {
    todoStore.removeTodo(index);
  };

  return (
    <div>
      <h1>{ todoStore.todoText }</h1>
      <Button type="primary" onClick={handleAddTodo}>Add Todo</Button>
      <ul>
        {todoStore.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button type="primary" onClick={() => handleRemoveTodo(index)}>Remove</Button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default MobX;
