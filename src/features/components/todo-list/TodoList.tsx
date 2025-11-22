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

const TodoList = ({handleEditFormOpen}: {handleEditFormOpen: (id: string)=>void}) => {
    const todos = useTodos();
    const [isOpen, setIsOpen] = useState(initialStatus);

    const list = Object.keys(initialStatus);

    const inprogress = todos ? todos.filter(todo=>todo.status==='in-progress') : [];
    const pending = todos ? todos.filter(todo=>todo.status==='pending') : [];
    const completed = todos ? todos.filter(todo=>todo.status==='completed') : [];

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