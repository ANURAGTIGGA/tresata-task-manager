import Status from '../../../shared/components/status/Status';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import './todoItem.css'
import { useDispatch } from '../../../shared/hooks';

export type Todo = {
    id: string;
    title: string;
    description: string;
    status: 'in-progress' | 'pending' | 'completed';
    created: Date;
}

type TodoItemProp = {
    onEdit: (id: string) => void
} & Todo;

const TodoItem = ({id, title, description, status, created, onEdit}: TodoItemProp) => {
    const dispatch = useDispatch();
    const dateObj = new Intl.DateTimeFormat(undefined, {year:'numeric', month:'short', day:'numeric'});

    function handleDeleteTodo(id: string) {
        if(dispatch) {
            dispatch({ type: 'DELETE_TODO', payload: id });
        }
    }

    return (
        <li className="todo-item">
            <div className="todo-header">
                <div className='todo-logo'>
                    <span>{title.split('')[0]}</span>
                </div>
                <div className='todo-title'>{title}</div>
                <div>
                    <Status type={status} />
                </div>
            </div>
            <div className='todo-desc'>{description}</div>
            <div className='todo-footer'>
                <div className='todo-created'>{dateObj.format(created)}</div>
                <div className='todo-actions'>
                    <button className='todo-action-edit' onClick={()=>onEdit(id)}>
                        <MdOutlineEdit />
                    </button>
                    <button className='todo-action-delete' onClick={() => handleDeleteTodo(id)}>
                        <RiDeleteBin5Line />
                    </button>
                </div>
            </div>
            
        </li>
    )
}

export default TodoItem