import { ListItem, Task } from '../ListItem';
import styles from './styles.module.css';
import clipboard from '../../assets/clipboard.svg';
import { useState } from 'react';


// const tasks: Task[] = [
//   {
//     id: uuidv4(),
//     description: 'Tomar café da manhã e fazer algo pra comer e tomar banho e jogar e trabalhar e fazer qualquer coisa',
//     isFinished: true
//   }
// ]

interface PanelProps {
  tasks: Task[];
  onToggleTaskCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Panel({ tasks, onToggleTaskCompletion, onDeleteTask }: PanelProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counters}>
        <strong className={styles.createdTasks}>
          Tarefas criadas
          <span className={styles.counterBadge}>
            {tasks.length}
          </span>
        </strong>
        <strong className={styles.finishedTasks}>
          Concluídas
          <span className={styles.counterBadge} >
            {tasks.filter(task => task.isFinished).length} de {tasks.length}
          </span>
        </strong>
      </div>

      {tasks.length === 0
        ? (
          <div className={styles.noTasks}>
            <img src={clipboard} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <ul>
            {tasks.map(task => (
              <ListItem
                key={task.id}
                task={task}
                onToggleTaskCompletion={onToggleTaskCompletion}
                onDeleteTask={onDeleteTask}
              />
            ))}
          </ul>
        )
      }
    </div>
  )
}