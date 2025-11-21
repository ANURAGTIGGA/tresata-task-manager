import './App.css'
import Todos from './features/components/todos/Todos';
import { TodosProvider } from './providers/TodosProvider';

function App() {

  return (
    <div className='main-container'>
      <TodosProvider>
          <Todos />
      </TodosProvider>
    </div>
  )
}

export default App
