import { useState } from 'react'
import Button from '../../../shared/components/button/Button'
import { useDispatch } from "../../../shared/hooks";
import './add-todo.css'
import type { Todo } from '../todo-item/TodoItem';

type AddTodoProps = {
    handleFromClose: () => void
}

const AddTodo = ({handleFromClose}: AddTodoProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

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
        <div className='actions'>
            <Button text="Cancel" type="secondary" handleClick={handleFromClose}  />
            <Button text="ADD" type="primary" handleClick={onTodoAdd}  />
        </div>
    </div>
  )
}

export default AddTodo