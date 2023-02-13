import React, {useRef} from "react";

interface NewTodoProps {
    onAddTodo: (todoText:string)=>void
}

export default function NewTodo({onAddTodo}:NewTodoProps) {

    const textInputRef = useRef<HTMLInputElement>(null)
    const todoSubmitHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
        // event.preventDefault()
        const enteredText = textInputRef.current!.value
        onAddTodo(enteredText)
    }
    return <>
        <div>
            <label htmlFor='todo-text'>Todo Text</label>
            <input id='todo-text' type='text' ref={textInputRef}/>
        </div>
        <button onClick={todoSubmitHandle}>Add Todo</button>
    </>
}