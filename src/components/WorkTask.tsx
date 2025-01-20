import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

import styles from './WorkTask.module.css'
import { NewTaskType } from './Tasks'

interface WorkTaskProps {
  task: NewTaskType
  changeTaskStatus: (taskId: string) => void
  handleDeleteTask: (taskId: string) => void
}

export function WorkTask({
  task,
  changeTaskStatus,
  handleDeleteTask,
}: WorkTaskProps) {
  function handleFinishTask() {
    task.isCompleted = true

    changeTaskStatus(task.id)
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

      <a onClick={} className={styles.trash}>
        <Trash />
      </a>
    </div>
  )
}
