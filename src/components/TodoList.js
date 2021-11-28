import * as React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';
import SUl from '../styled/SUl';

const TodoList = () => {
  let isCount = false;
  const todos = useSelector(state => state.todos);
  if (todos.length === 0) isCount = true;
  else isCount = false;
  return (
    <SUl>
      { isCount && <p style={{ display: "flex", justifyContent: "center" }}>Not have todos</p> }
      {todos.map(todo => <TodoItem key = { todo.id } todo = { todo } />)}
    </SUl>
  )
}

export default TodoList;