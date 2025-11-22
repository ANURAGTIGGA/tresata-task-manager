import { useState } from 'react'
import Button from '../../../shared/components/button/Button'
import { useDispatch, useTodos } from "../../../shared/hooks";
import './add-todo.css'
import type { Todo } from '../todo-item/TodoItem';
import type { Status } from '../todo-list/TodoList';

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

  const dispatch = useDispatch();

  function onTodoAdd() {
    const payload: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      status: 'pending',
      created: new Date()
    }

    if(dispatch) {
       dispatch({ type: 'ADD_TODO', payload });
       handleFromClose()
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
        dispatch({ type: 'EDIT_TODO', payload });
        handleFromClose()
      }
    }
  }

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
            <select 
              className="todo-status" 
              value={status}
              onChange={(e)=>setStatus(e.target.value as Status)}>
              {
                Object.keys(dropdownValues).map(item => (
                  <option 
                    key={item}
                    value={item}
                    >{dropdownValues[item as Status]}</option>
                ))
              }
            </select>
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