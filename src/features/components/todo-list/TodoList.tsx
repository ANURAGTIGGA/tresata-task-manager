import { useState } from "react";
import TodoItem, { type Todo } from "../todo-item/TodoItem";

const initialData: Todo[] = [
    {
        id:"01",
        title: "Lorem ipsum",
        description: "some dummy text",
        status: 'in-progress',
        created: new Date('12-12-2024')
    },
    {
        id:"02",
        title: "Lorem ipsum second",
        description: "some dummy text second",
        status: 'pending',
        created: new Date('12-12-2024')
    },
    {
        id:"03",
        title: "Lorem ipsum third",
        description: "some dummy text third",
        status: 'completed',
        created: new Date('12-12-2024')
    }
]

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>(initialData);

    return (
        <ul>
            {
                todos && todos.map(todo => (
                    <TodoItem {...todo} />
                ))
            }
        </ul>
    )
}

export default TodoList