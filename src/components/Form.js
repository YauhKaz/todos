import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions';

const Form = (props) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  const handlerChange = (e) => {
    setText(e.target.value);
  };
  const handerSubmit = (event) => {
    event.preventDefault();
    if (text.trim() === '') alert('You need some write');
    else {
      dispatch(addTodo(todos.length, text.trim()));
      setText('');
    }
  };
  return (
    <form onSubmit = { handerSubmit }>
      <input type = 'text' onChange = { handlerChange } value = { text }/>
      <input type = 'submit' value = {props.name} />
    </form>
  )
}

export default Form;