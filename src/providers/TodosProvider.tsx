import { createContext, useReducer, type ReactNode } from 'react'
import { todosReducer } from './todosReducer'
import type { Action } from './todosReducer'
import type { Todo } from '../features/components/todo-item/TodoItem';

export const TodoStateContext = createContext<Todo[] | null>(null);
export const TodoDispatchContext = createContext<React.ActionDispatch<[action: Action]> | null>(null);

export function TodoProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(todosReducer, []);

    return (
        <TodoStateContext value={state}>
            <TodoDispatchContext value={dispatch}>
                {children}
            </TodoDispatchContext>
        </TodoStateContext>
    )
}