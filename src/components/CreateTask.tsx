import styles from './CreateTask.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function CreateTask() {
  return (
    <form className={styles.taskContainer}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
