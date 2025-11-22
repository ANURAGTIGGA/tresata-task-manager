import { useState } from 'react'
import Button from '../../../shared/components/button/Button'
import { useDispatch, useTodos } from "../../../shared/hooks";
import './add-todo.css'
import type { Todo } from '../todo-item/TodoItem';
import type { Status } from '../todo-list/TodoList';
import Dropdown from '../../../shared/components/dropdown/Dropdown';
import Loader from '../../../shared/components/loader/Loader';

type AddTodoProps = {
    handleFromClose: () => void
    isEdit?: boolean
    id?: string
}

const dropdownValues: Record<Status, string> = {
  'in-progress': 'In Progress',
  'pending': 'Pending',
  'completed': 'Completed',
};

const AddTodo = ({handleFromClose, isEdit, id}: AddTodoProps) => {
  const state = useTodos();
  const selectedTodo = state?.find(todo=>todo.id === id);

  const [title, setTitle] = useState(selectedTodo?.title || '');
  const [description, setDescription] = useState(selectedTodo?.description || '');
  const [status, setStatus] = useState<Status | undefined>(selectedTodo?.status || undefined);

  const [loader, setLoader] = useState(false);

  const dispatch = useDispatch();

  function handleStatusChange(value: string) {
    setStatus(value as Status);
  }

  function onTodoAdd() {
    const payload: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending',
      created: new Date()
    }

    if(dispatch) {
      setLoader(true);
      setTimeout(()=>{
        dispatch({ type: 'ADD_TODO', payload });
        handleFromClose();
        setLoader(false);
      }, 300)
    }
  }

  function onTodoUpdate() {
    if(id) {
      const payload: Omit<Todo, 'created'> = {
        id,
        title,
        description,
        status: status as Status,
      }

      if(dispatch) {
        setLoader(true);
        setTimeout(()=>{
          dispatch({ type: 'EDIT_TODO', payload });
          handleFromClose();
          setLoader(false);
      }, 300)
      }
    }
  }

  if(loader)
    return <>
      <Loader />
      <Loader />
      <Loader />
    </>

  return (
    <div className='add-todo-container'>
        <input 
          id='todo-title' 
          type='text' 
          placeholder='Enter the title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
        <textarea 
          id='todo-desc' 
          placeholder='Enter the description'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
        ></textarea>
        {
          isEdit ? 
          <div className='todo-status-dropdown'>
            <Dropdown
              options={dropdownValues}
              value={status as string}
              setValue={handleStatusChange}
            />
          </div> :
          null
        }
        <div className='actions'>
            <Button text="Cancel" type="secondary" handleClick={handleFromClose}  />
            {
              isEdit ? 
                <Button text="UPDATE" type="primary" handleClick={onTodoUpdate}  /> :
                <Button text="ADD" type="primary" handleClick={onTodoAdd}  />
            }
        </div>
    </div>
  )
}

export default AddTodo