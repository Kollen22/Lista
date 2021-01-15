import React, {useState} from 'react'
import TodoForm from './TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';

const Todo = ({ todos, viewTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        text: ''
    })

    const submitUpdate = value =>{
        updateTodo(edit.id, value);

        setEdit({
            id: null,
            text: ''
        })
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, index) => (

        <div className={todo.iscomplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => viewTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                className="delete-icons" 
                onClick={() => removeTodo(todo.id)}
                />
                <TiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className="edit-icon"
                />
            </div>
        </div>
        ))
}

export default Todo
