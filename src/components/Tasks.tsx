import { EmptyTask } from './EmptyTask'
import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <div className={styles.tasksContainer}>
      <header className={styles.taskHeader}>
        <div className={styles.create}>
          <span>Tarefas criadas</span>
          <div>0</div>
        </div>
        <div className={styles.complete}>
          <span>Concluidas</span>
          <div>0</div>
        </div>
      </header>

      <div className={styles.taskBody}>
        <EmptyTask />
      </div>
    </div>
  )
}
