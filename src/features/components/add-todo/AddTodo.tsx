import Button from '../../../shared/components/button/Button'
import './add-todo.css'

type AddTodoProps = {
    handleFromClose: () => void
}

const AddTodo = ({handleFromClose}: AddTodoProps) => {
  return (
    <div className='add-todo-container'>
        <input id='todo-title' type='text' placeholder='Enter the title' />
        <textarea id='todo-desc' placeholder='Enter the description'></textarea>
        <div className='actions'>
            <Button text="Cancel" type="secondary" handleClick={handleFromClose}  />
            <Button text="ADD" type="primary" handleClick={()=>{}}  />
        </div>
    </div>
  )
}

export default AddTodo