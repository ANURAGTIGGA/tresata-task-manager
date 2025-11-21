//import { useState } from "react";
import TodoItem, { type Todo } from "../todo-item/TodoItem";
import { useTodos } from "../../../shared/hooks";

const TodoList = () => {
    const todos = useTodos()
    //const [todos, setTodos] = useState<Todo[]>(initialData);

    return (
        <ul>
            {
                todos && todos.map(todo => (
                    <TodoItem key={todo.id} {...todo} />
                ))
            }
        </ul>
    )
}

export default TodoList