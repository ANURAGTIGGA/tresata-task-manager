import type { Todo } from "../features/components/todo-item/TodoItem"

export type Action = { type: 'ADD_TODO'; payload: Todo }
            | { type: 'EDIT_TODO'; payload: Omit<Todo, 'created'> }
            | { type: 'DELETE_TODO'; payload: string };

export function todosReducer(state: Todo[], action: Action): Todo[] {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]

        case 'EDIT_TODO':
            return state.map(todo => {
                if(todo.id === action.payload.id) {
                    return {
                        ...todo,
                        status: action.payload.status
                    }
                } else {
                    return todo;
                }
            })

        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state
    }
}

export const initialData: Todo[] = [
    {
        id:"01",
        title: "Lorem ipsum",
        description: "some dummy text",
        status: 'in-progress',
        created: new Date('12-12-2024')
    },
    {
        id:"02",
        title: "Lorem ipsum second",
        description: "some dummy text second",
        status: 'pending',
        created: new Date('12-12-2024')
    },
    {
        id:"03",
        title: "Lorem ipsum third",
        description: "some dummy text third",
        status: 'completed',
        created: new Date('12-12-2024')
    }
]