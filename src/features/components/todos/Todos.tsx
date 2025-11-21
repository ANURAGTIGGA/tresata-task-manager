import { useState } from 'react';
import Button from '../../../shared/components/button/Button';
import Search from '../../../shared/components/search/Search';
import TodoList from '../todo-list/TodoList';
import './todos.css';
import AddTodo from '../add-todo/AddTodo';
import Header from '../../../shared/components/header/Header';

const headerTitle = "to-do app";

const Todos = () => {
  const [showForm, setShowForm] = useState(false);
  const [headerText, setHeaderText] = useState(headerTitle);
  const [icon, setIcon] = useState<string | null>(null);


  function handleFormOpen(): void {
    setHeaderText("Add Task");
    setIcon("back");
    setShowForm(true);
  }

  function handleFromClose(): void {
    setHeaderText(headerTitle);
    setIcon(null);
    setShowForm(false);
  }
  
  return (
    <>
        <Header title={headerText} icon={icon} />
        <div className='todos-container'>
          {
            showForm ? null : <Search placeholder='Search To-Do' />
          }
          <div className='todos-list'>
          {
            showForm ? <AddTodo handleFromClose={handleFromClose} /> : <TodoList />
          }
          </div>
          <div className='add-todo'>
          {
            showForm ? null : <Button text="+" type="primary" shape="circle" handleClick={handleFormOpen} />
          }
          </div>
        </div>
    </>
  )
}

export default Todos


// search
// list with tabs
// add btn and form