import React, {useState} from 'react';
import Todo from './Todo'

const TodoList = ({todos, setTodos, updateTodo, deleteTodo }) => {

    return (
        todos.map((todo, index) => 
             //passing individual items from Todo
            <Todo todo={todo} index={index} key={index} updateTodo={updateTodo} deleteTodo={deleteTodo} setTodos={setTodos} todos={todos} />

            // displaying tasks without deleting function from Todo.js
            // <p>{todo.body}</p>
        )

    );
};

export default TodoList;