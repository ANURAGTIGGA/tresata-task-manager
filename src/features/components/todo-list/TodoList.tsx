import { useState } from "react";
import TodoItem from "../todo-item/TodoItem";
import { useTodos } from "../../../shared/hooks";
import Accordion from "../../../shared/components/accordion/Accordion";
import './todo-list.css';

export type Status = 'in-progress' | 'pending' | 'completed';

const initialStatus: Record<Status, boolean> = {
  'in-progress': true,
  'pending': true,
  'completed': true,
};

type TodoListProps = {
    searchtext: string
    handleEditFormOpen: (id: string)=>void
}

const TodoList = ({searchtext, handleEditFormOpen}: TodoListProps) => {
    const todos = useTodos();
    const text = searchtext.toLowerCase();
    const filteredTodo = searchtext ? todos?.filter(todo => todo.title.toLowerCase().includes(text) || todo.description.toLowerCase().includes(text)) : todos;
    const [isOpen, setIsOpen] = useState(initialStatus);

    const list = Object.keys(initialStatus);

    const inprogress = filteredTodo ? filteredTodo.filter(todo=>todo.status==='in-progress') : [];
    const pending = filteredTodo ? filteredTodo.filter(todo=>todo.status==='pending') : [];
    const completed = filteredTodo ? filteredTodo.filter(todo=>todo.status==='completed') : [];

    function handleAccordionClick(key: Status) {
        setIsOpen(prev => {
            return {
                ...prev,
                [key]: !prev[key]
            }
        })
    }

    function handleEditTodo(id: string) {
        handleEditFormOpen(id);
    }

    return (
        <>
        {
            list.map((item) => {
                const value = item === 'in-progress' ? inprogress : item === 'pending' ? pending : completed;
                return (
                <div key={item} className="status-container">
                    <Accordion
                        name={item}
                        size={value.length}
                        isOpen={isOpen[item as Status]}
                        handleAccordionClick={()=>handleAccordionClick(item as Status)}
                    >
                        <ul>
                            {
                                value.map(todo => (
                                    <TodoItem key={todo.id} {...todo} onEdit={handleEditTodo} />
                                ))
                            }
                        </ul>
                    </Accordion>
                </div>
            )})
        }
        </>
    )
}

export default TodoList