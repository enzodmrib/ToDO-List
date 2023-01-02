import { Trash } from 'phosphor-react'
import { Checkbox } from '../Checkbox';

import styles from './styles.module.css'

export interface Task {
  id: string;
  description: string;
  isFinished: boolean;
}

interface ListItemProps {
  task: Task;
  onToggleTaskCompletion: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function ListItem({ task, onToggleTaskCompletion, onDeleteTask }: ListItemProps) {
  return (
    <li className={task.isFinished ? styles.finishedListItem : styles.listItem}>
      <div className={styles.listItemInfo}>
        <Checkbox
          isChecked={task.isFinished}
          onCheck={() => onToggleTaskCompletion(task.id)}
        />
        <p className={styles.description}>{task.description}</p>
      </div>
      <button
        title="Remover tarefa"
        onClick={() => onDeleteTask(task.id)}
        className={styles.removeTask}
      >
        <Trash size={14} />
      </button>
    </li>
  )
}