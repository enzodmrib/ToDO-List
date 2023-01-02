import { PlusCircle } from 'phosphor-react'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Todo } from './components/Todo'
import './global.css'

function App() {
  return (
    <main>
      <Header />
      <Todo />
    </main>
  )
}

export default App
