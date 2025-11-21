//import { useState } from 'react'
import './App.css'
import Todos from './features/components/todo/Todos';
import Header from './shared/components/header/Header'

function App() {
  //const [count, setCount] = useState(0)

  const headerTitle = "to-do app";

  return (
    <>
      <Header title={headerTitle} />
      <Todos />
    </>
  )
}

export default App
