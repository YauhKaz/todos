import * as React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';


const TodoList = () => {
  let isCount = false;
  const todos = useSelector(state => state.todos);
  if (todos.length === 0) isCount = true;
  else isCount = false;
  return (
    <ul>
      { isCount && <p>Not have todos</p> }
      {todos.map(todo => <TodoItem key = { todo.id } todo = { todo } />)}
    </ul>
  )
}

export default TodoList;