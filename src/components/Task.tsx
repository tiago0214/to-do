import styles from './Task.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export function Task() {
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
