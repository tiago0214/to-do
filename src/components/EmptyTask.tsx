import styles from './EmptyTask.module.css'

import clipboard from '../assets/clipboard.svg'

export function EmptyTask() {
  return (
    <div className={styles.emptyContainer}>
      <img src={clipboard} />
      <div className={styles.text}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}
