import * as React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';
import SButton from '../styled/SButton';
import SDiv from '../styled/SDiv';

const Todopage = () => {
  return (
    <SDiv>
      <h2>Your ToDos for Today</h2>
      <TodoList/>
      <Link to = '/'>
        <SButton style = {{ display: "flex", justifyContent: "flex-start" }}>
          Back
        </SButton>
      </Link>
    </SDiv>    
  )
}

export default Todopage;