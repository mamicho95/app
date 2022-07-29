import React from 'react'
import { Todoitem } from './Todoitem';

export function TodoList({ todos,toggleTodo }) {
  return (
    <ul>
      { todos.map((todo,index) => (
        <Todoitem key={index} todo={todo} toggleTodo={toggleTodo}/>
      ))
      }
    </ul>
  );
}
