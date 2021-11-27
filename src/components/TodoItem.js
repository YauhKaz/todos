import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, LOAD_TODO } from '../store/constants';

const TodoItem = ({ todo }) => {
  const [ isEdit, setIsEdit ] = useState(false);
  const [text, setText] = useState(todo.title);
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const deleteHandler = (id) => {
    const resultAfterDeleteTodo = todos.filter(item => item.id !== id);
    dispatch({ type: DELETE_TODO, payload: resultAfterDeleteTodo });
  }

  const handlerChange = (e) => {
    setText(e.target.value);
  }

  const handerSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') { 
      setText(todo.title);
      alert('You need some write');
    }
    else {
      const resultAfterEditTodo = todos.map(item => item.title = (item.id === todo.id) ? text.trim() : item.title);
      dispatch({ type: LOAD_TODO, payload: resultAfterEditTodo })
      setIsEdit(false);
    }  
  };

  return (
    <li>
      {todo.title}
      <button onClick = { () => deleteHandler(todo.id) }>Delete</button>
      <button onClick = { () => setIsEdit(!isEdit) }>Edit</button>
      {isEdit && 
        <form onSubmit = { handerSubmit }>
          <input type = 'text' value = { text } onChange={ handlerChange }/>
          <input type = 'submit' value = 'Update' />
        </form>
        }
    </li>
  )
}

export default TodoItem;