import { useState } from "react";

type Todo = {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'pending' | 'completed';
    created?: Date;
}

const initialData = [
    {
        id:"01",
        title: "Lorem ipsum",
        description: "some dummy text",
        status: 'in-progress',
        created: '12-12-2024'
    },
    {
        id:"02",
        title: "Lorem ipsum second",
        description: "some dummy text second",
        status: 'in-progress',
        created: '12-12-2024'
    }
]

const TodoList = () => {
    const [todos, setTodos] = useState(initialData);

    return (
        <ul>
            {
                todos && todos.map(todo => (
                    <li key={todo.id}>
                        <div>{todo.title}</div>
                        <div>{todo.description}</div>
                        <div>{todo.created}</div>
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList