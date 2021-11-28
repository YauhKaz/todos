import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../store/actions';
import SForm from '../styled/SForm';
import SInput from '../styled/SInput';

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
    <SForm onSubmit = { handerSubmit }>
      <SInput type = 'text' onChange = { handlerChange } value = { text }/>
      <SInput type = 'submit' value = {props.name} />
    </SForm>
  )
}

export default Form;