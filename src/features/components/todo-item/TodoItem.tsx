import Status from '../../../shared/components/status/Status';
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import './todoItem.css'
import { useDispatch } from '../../../shared/hooks';
import { useState } from 'react'
import Loader from '../../../shared/components/loader/Loader';

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
    const [loader, setLoader] = useState(false);
    const dispatch = useDispatch();
    const dateObj = new Intl.DateTimeFormat(undefined, {weekday: 'short', year:'numeric', month:'long', day:'2-digit'});

    function formatDate(datestr: string): string {
        const arr = datestr.split(' ');
        const day = arr[1];
        arr[1] = `${day},`;
        
        return arr.join(' ');
    }

    function handleDeleteTodo(id: string) {
        if(dispatch) {
            setLoader(true);
            setTimeout(()=>{
                dispatch({ type: 'DELETE_TODO', payload: id });
                setLoader(false);
            }, 250)
        }
    }

    if(loader)
        return <Loader />

    return (
        <li className="todo-item">
            <div className="todo-header">
                <div className='todo-logo'>
                    <span>{title.split('')[0]}</span>
                </div>
                <div className={status === 'completed' ? 'todo-title completed' : 'todo-title'}>{title}</div>
                <div>
                    <Status type={status} />
                </div>
            </div>
            <div className='todo-desc'>{description}</div>
            <div className='todo-footer'>
                <div className='todo-created'>{formatDate(dateObj.format(new Date(created)))}</div>
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