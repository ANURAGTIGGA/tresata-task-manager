import { useState } from 'react';
import Button from '../../../shared/components/button/Button';
import Search from '../../../shared/components/search/Search';
import TodoList from '../todo-list/TodoList';
import './todos.css';

const Todos = () => {
  const [showForm, setShowForm] = useState(false);
  
  return (
    <div className='task-list'>
      <Search placeholder='Search To-Do' />
      <TodoList />
      <Button text="+" type="primary" shape="circle" />
    </div>
  )
}

export default Todos


// search
// list with tabs
// add btn and form