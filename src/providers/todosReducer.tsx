import type { Todo } from "../features/components/todo-item/TodoItem"

export type Action = { type: 'ADD_TODO'; payload: Todo }
            | { type: 'EDIT_TODO'; payload: Omit<Todo, 'created'> }
            | { type: 'DELETE_TODO'; payload: string };

export function todosReducer(state: Todo[], action: Action): Todo[] {
    switch(action.type) {
        case 'ADD_TODO':
            const todos = [...state, action.payload]
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos

        case 'EDIT_TODO':
            const editedTodos = state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        title: action.payload.title || todo.title,
                        description: action.payload.description || todo.description,
                        status: action.payload.status || todo.status
                    }
                } else {
                    return todo;
                }
            })
            localStorage.setItem('todos', JSON.stringify(editedTodos));
            return editedTodos;

        case 'DELETE_TODO':
            const updatedTodos = state.filter(todo => todo.id !== action.payload)
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
            return updatedTodos

        default:
            return state
    }
}

export const initialData: Todo[] = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos') as string) : []
