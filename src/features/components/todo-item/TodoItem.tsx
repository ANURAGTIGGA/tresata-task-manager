
export type Todo = {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'pending' | 'completed';
    created?: Date;
}

const TodoItem = (todo: Todo) => {
  return (
    <li key={todo.id}>
        <div>{todo.title}</div>
        <div>{todo.description}</div>
        <div>{todo.created?.toString()}</div>
    </li>
  )
}

export default TodoItem