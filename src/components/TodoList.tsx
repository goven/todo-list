import React from "react";

interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id:string)=> void
}

export default function TodoList({items,onDeleteTodo}: TodoListProps) {
    return <ul>
        {items.map(todo => <li key={todo.id}><span>{todo.text}</span>
            <button onClick={onDeleteTodo.bind(null,todo.id)}>Delete</button>
        </li>)}
    </ul>
}