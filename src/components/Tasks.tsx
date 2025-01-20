import { useState } from 'react'
import { EmptyTask } from './EmptyTask'
import styles from './Tasks.module.css'
import { WorkTask } from './WorkTask'
import { CreateTask } from './CreateTask'
import { v4 as uuidv4 } from 'uuid'

export interface NewTaskType {
  id: string
  content: string
  isCompleted: boolean
}

export function Tasks() {
  const [tasks, setTasks] = useState<NewTaskType[]>([])

  function handleCreateNewTask(taskContent: string) {
    const newTask: NewTaskType = {
      id: uuidv4(),
      content: taskContent,
      isCompleted: false,
    }

    setTasks([newTask, ...tasks])
  }

  function handleChangeTaskStatus(taskId: string) {
    const task: NewTaskType[] = tasks.map((element) => {
      if (element.id === taskId) {
        element.isCompleted = true
      }

      return element
    })

    setTasks([...task])
  }

  function deleteTask(taskId: string) {
    const task = tasks.filter((element) => {
      return element.id != taskId
    })

    setTasks(task)
  }

  return (
    <>
      <CreateTask handleCreateNewTask={handleCreateNewTask} />

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
          {tasks.length === 0 ? (
            <EmptyTask />
          ) : (
            tasks.map((element) => {
              return (
                <WorkTask
                  key={element.id}
                  task={element}
                  changeTaskStatus={handleChangeTaskStatus}
                  deleteTask={deleteTask}
                />
              )
            })
          )}
        </div>
      </div>
    </>
  )
}
