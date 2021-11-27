import * as React from 'react';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

const Todopage = () => {
  return (
    <div>
      <Link to = '/'>
        <button>
          Back
        </button>
      </Link>
      <p>Todopage</p>
      <TodoList/>
    </div>    
  )
}

export default Todopage;