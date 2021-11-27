import * as React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Form name = { 'Add' } />
      <Link to = '/todos'>
        <button>
          Todos
        </button>
      </Link>
    </div>
  )
}

export default Homepage;