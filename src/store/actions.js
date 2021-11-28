import { ADD_TODO } from "./constants"

export const addTodo = (id, value) => {
  return {
    type: ADD_TODO,
    payload: {
      id: id,
      title: value,
    }
  }
}