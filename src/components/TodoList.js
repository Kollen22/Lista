import React, {useState} from 'react'
import TodoForm from './TodoForm';
import Todo from './Todo';


const TodoList = () => {
const [todos, setTodos] = useState([]);

//função para guardar o valor digitado e verificar
//se tem valores vazios ou com muitos espaços!
const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
        return;
    }

    const newTodos = [todo, ...todos];
    console.log(todo, ...todos);

    setTodos(newTodos);

}

const removeTodo = id =>{
    const removeArr = [...todos].filter(todo => todo.id !==id);

    setTodos(removeArr);
}

const viewTodo = id =>{
    let updateTodos = todos.map(todo => {
        if(todo.id === id){
            todo.iscomplete = !todo.iscomplete;
        }
        return todo;
    });
    setTodos(updateTodos);
}

const updateTodo = (todoId, newValue) =>{
    if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
    }

    setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
}


    return (
        <div className="todo-app">
            <h1>O que Planeja Para Hoje ?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
                todos={todos}
                viewTodo={viewTodo}
                removeTodo = {removeTodo}
                updateTodo = {updateTodo}
                />
        </div>
    )
}

export default TodoList
