import * as React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import SDiv from '../styled/SDiv';
import SButton from '../styled/SButton';

const Homepage = () => {
  return (
    <SDiv>
      <h1>Welcome to your ToDos</h1>
      <Form name = { 'Add ToDo' } />
      <Link to = '/todos'>
        <SButton>
          All Your Todos Here
        </SButton>
      </Link>
    </SDiv>
  )
}

export default Homepage;