import React, {useState} from 'react';


const Todo = ({todo, index, todos, setTodos}) => {
    
    const checked = {'text-decoration': 'line-through'}
    const unchecked = {};

    const updateTodo = (index) => {
        // creating a copy
        const copyTodos = [...todos];
        // changing the item at the correct index
        copyTodos[index].completed = !copyTodos[index].completed;
        setTodos(copyTodos);
    }

    const deleteTodo = (deletedIndex) => {
        const copyTodos = todos.filter((todo, deletedIndex) => {
            // if the index is different, keep the item
            if ( index !== deletedIndex){
                return true;
            }
            return false;    
        });

        setTodos(copyTodos);
        
        // setTodos(todos.filter((todo, i) => i !== deletedIndex ? true : false));
    }

    return (
        <div>
            {/* {JSON.stringify(todo)} */}
            <p className="list" style={todo.completed ? checked : unchecked}>
                {todo.body}
            <input type="checkbox" checked={todo.completed} onClick={ e => updateTodo(index)} className="checkBox"/>
             <button onClick={ e => deleteTodo(index)} className="trash-btn">
                {/* <i className="fas fa-trash" stlye="font-size: 40px" ></i> */}
                Delete
             </button>
            </p>
        </div>
    )
}

export default Todo;