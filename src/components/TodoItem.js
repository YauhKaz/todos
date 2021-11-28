import * as React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_TODO, LOAD_TODO } from '../store/constants';
import SButton from '../styled/SButton';
import SForm from '../styled/SForm';
import SInput from '../styled/SInput';
import SLi from '../styled/SLi';
import SSpan from '../styled/SSpan';

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
    <SLi>
      <SSpan>{todo.title}</SSpan>
      <div>
        <SButton onClick = { () => deleteHandler(todo.id) }>Delete</SButton>
        <SButton onClick = { () => setIsEdit(!isEdit) }>Edit</SButton>
      </div>
      {isEdit && 
        <SForm onSubmit = { handerSubmit }>
          <SInput type = 'text' value = { text } onChange={ handlerChange }/>
          <SInput type = 'submit' value = 'Update' />
        </SForm>
        }
    </SLi>
  )
}

export default TodoItem;