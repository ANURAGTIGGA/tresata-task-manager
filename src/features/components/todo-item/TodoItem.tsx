import Status from '../../../shared/components/status/Status';
import './todoItem.css'

export type Todo = {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'pending' | 'completed';
    created: Date;
}

const TodoItem = (todo: Todo) => {
    const dateObj = new Intl.DateTimeFormat(undefined, {year:'numeric', month:'short', day:'numeric'})
  return (
    <li className="todo-item" key={todo.id}>
        <div className="todo-header">
            <div className='todo-logo'>
                <span>{todo.title.split('')[0]}</span>
            </div>
            <div className='todo-title'>{todo.title}</div>
            <div>
                <Status type={todo.status} />
            </div>
        </div>
        <div className='todo-desc'>{todo.description}</div>
        <div className='todo-created'>{dateObj.format(todo.created)}</div>
    </li>
  )
}

export default TodoItem