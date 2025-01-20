import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

import styles from './WorkTask.module.css'
import { NewTaskType } from './Tasks'

interface WorkTaskProps {
  task: NewTaskType
  changeTaskStatus: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export function WorkTask({
  task,
  changeTaskStatus,
  deleteTask,
}: WorkTaskProps) {
  function handleFinishTask() {
    task.isCompleted = true

    changeTaskStatus(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <div className={styles.workTask}>
      {task.isCompleted ? (
        <a onClick={handleFinishTask} className={styles.check}>
          <CheckCircle size={17} weight="fill" />
        </a>
      ) : (
        <a onClick={handleFinishTask} className={styles.uncheck}>
          <Circle size={17} />
        </a>
      )}
      <p
        className={task.isCompleted ? styles.workTextComplete : styles.workText}
      >
        {task.content}
      </p>

      <a className={styles.trash} onClick={handleDeleteTask}>
        <Trash />
      </a>
    </div>
  )
}
