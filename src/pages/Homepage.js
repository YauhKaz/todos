import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions';

const Homepage = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handlerChange = (e) => {
    setText(e.target.value);
  };
  const handerSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(todos.length, text));
    setText('');
  };
  return (
    <div>
      <h1>Homepage</h1>
      <form onSubmit = { handerSubmit }>
        <input type = 'text' onChange = { handlerChange } value = { text }/>
        <input type = 'submit' value = 'Add' />
      </form>
    </div>
    
  )
}

export default Homepage;