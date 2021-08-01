import React, {useState} from 'react';
import {TodoList} from "./TodoList";
import {AddTodoForm} from "./AddTodoForm";

// Do not need to add in type below
const initialTodos: Array<Todo> = [
    {text: "feed the cats", complete: true},
    {text: "write app", complete: false},
];

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);
    // can also do:
    // const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const toggleTodo: ToggleTodo = (selectedTodo) => {
            const newTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return {
                    text: todo.text, complete: !todo.complete
                };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const addTodo: AddTodo = (newTodo: String) => {
        if (newTodo.length === 0) {
            return;
        }
        setTodos([...todos, {text: newTodo, complete: false}])
    };

    return (
      <>
          <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
          <AddTodoForm addTodo = {addTodo}/>
      </>
  );
};

export default App;
