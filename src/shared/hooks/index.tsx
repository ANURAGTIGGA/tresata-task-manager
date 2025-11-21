import { useContext } from 'react'
import { TodoStateContext, TodoDispatchContext } from '../../providers/TodosProvider'

export function useTodos() {
    return useContext(TodoStateContext)
}

export function useDispatch() {
    return useContext(TodoDispatchContext)
}