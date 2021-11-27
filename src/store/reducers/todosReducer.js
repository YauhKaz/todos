import { ADD_TODO, LOAD_TODO, DELETE_TODO } from '../constants';

const initialState = {
  todos: [
    {
      id: 0,
      title: 'Buy butter',
    },
    {
      id: 1,
      title: 'Buy milk',
    },
  ]
};

const listState = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      return {
        todos: [...state.todos, action.payload],
      };
    }
    case DELETE_TODO: {
      return {
        todos: action.payload,
      };
    }
    case LOAD_TODO: {
      return state;
    }
    
    default: return state;
  }
};

export default listState;
