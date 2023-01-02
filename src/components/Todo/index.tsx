import { Button } from '../Button'
import { Input } from '../Input'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid';

import styles from './styles.module.css'
import { Panel } from '../Panel'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from '../ListItem'

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputText, setInputText] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, { id: uuidv4(), description: inputText, isFinished: false }]);
    setInputText('');
  }

  function handleDeleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== taskId);

    setTasks(tasksWithoutDeletedOne)
  }

  function handleToggleTaskCompletion(taskId: string) {
    const updatedTasks = tasks.map(task => task.id === taskId ? { ...task, isFinished: !task.isFinished } : task)

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.todo}>
      <form
        onSubmit={handleCreateTask}
        className={styles.form}
      >
        <Input
          value={inputText}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setInputText(event.target.value)}
          placeholder='Adicione uma nova tarefa'
        />
        <Button
          title='Criar tarefa'
          type="submit"
        >
          Criar
          <PlusCircle size={16} />
        </Button>
      </form>
      <Panel
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTaskCompletion={handleToggleTaskCompletion}
      />
    </div >
  )
}