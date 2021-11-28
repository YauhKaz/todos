import { createStore } from 'redux';
import listState from './reducers/todosReducer';

const store = createStore(listState);

export default store;