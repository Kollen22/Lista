import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {
const [input, setInput] = useState(props.edit ? props.edit.value : '');

const inputRef = useRef(null);

useEffect(() =>{
    inputRef.current.focus();
})

//função para pegar o valor digitado e enviar para o state
const handleChange = e =>{
    setInput(e.target.value);
}

//função para passar o valor para o array e guardar todos eles
const handleSubmit = e =>{
    e.preventDefault();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
    });

    setInput('');
}

    return (
        <form onSubmit={handleSubmit}>
            {props.edit ? (<><input 
            type="text" 
            name="text" 
            value={input} 
            placeholder="Atualizar"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
            <button className="todo-button-edit">Atualizar</button></>)
            :
            (<><input 
                type="text" 
                name="text" 
                value={input} 
                placeholder="Adicionar"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                />
                <button className="todo-button">Enviar</button></>)
            }
            
        </form>
    )
}

export default TodoForm
