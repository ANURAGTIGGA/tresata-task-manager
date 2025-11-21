import { useState } from 'react';
import Button from '../../../shared/components/button/Button';
import Search from '../../../shared/components/search/Search';
import TodoList from '../todo-list/TodoList';
import './todos.css';
import AddTodo from '../add-todo/AddTodo';

const Todos = () => {
  const [showForm, setShowForm] = useState(false);

  function handleFormOpen(): void {
    setShowForm(true);
  }
  
  return (
    <div className='task-list'>
      <Search placeholder='Search To-Do' />
      {
        showForm ? <AddTodo /> : <TodoList />
      }
      <Button text="+" type="primary" shape="circle" handleClick={handleFormOpen} />
    </div>
  )
}

export default Todos


// search
// list with tabs
// add btn and form