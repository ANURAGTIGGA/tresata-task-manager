import { useState } from 'react';
import Button from '../../../shared/components/button/Button';
import Search from '../../../shared/components/search/Search';
import TodoList from '../todo-list/TodoList';
import './todos.css';
import AddTodo from '../add-todo/AddTodo';
import Header from '../../../shared/components/header/Header';

const headerTitle = "TO-DO APP";

const Todos = () => {
  const [showForm, setShowForm] = useState(false);
  const [editFormId, setEditFormId] = useState<string | null>(null);
  const [headerText, setHeaderText] = useState(headerTitle);
  const [icon, setIcon] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  function handleFormOpen(): void {
    setHeaderText("Add Task");
    setIcon("back");
    setShowForm(true);
  }

  function handleFromClose(): void {
    setHeaderText(headerTitle);
    setIcon(null);
    setShowForm(false);
    setEditFormId(null);
  }

  function handleEditFormOpen(id: string): void {
    console.log("edit clicked in todos", id)
    setHeaderText("Edit Task");
    setIcon("back");
    setEditFormId(id);
  }
  
  return (
    <>
        <Header title={headerText} icon={icon} />
        <div className='todos-container'>
          {
            showForm || editFormId ? null : <Search placeholder='Search To-Do' handleSearchText={setSearchText} />
          }
          <div className='todos-list'>
          {
            showForm ? 
              <AddTodo handleFromClose={handleFromClose} /> : 
              editFormId ? 
              <AddTodo handleFromClose={handleFromClose} isEdit={true} id={editFormId} /> :
              <TodoList searchtext={searchText} handleEditFormOpen={handleEditFormOpen} />
          }
          </div>
          <div className='add-todo'>
          {
            showForm || editFormId ? null : <Button text="+" type="primary" shape="circle" handleClick={handleFormOpen} />
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