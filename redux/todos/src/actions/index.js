/* 
	Actions are payloads of information that send data from 
	your application to your store.  They are the only source 
	of information for the store. You send them to the store 
	using store.dispatch().
*/

let nextTodoId = 0
export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
