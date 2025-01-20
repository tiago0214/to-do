import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './CreateTask.module.css'
import { PlusCircle } from '@phosphor-icons/react'

interface CreateTaskProps {
  handleCreateNewTask: (taskContent: string) => void
}

export function CreateTask({ handleCreateNewTask }: CreateTaskProps) {
  const [newTask, setNewTask] = useState('')

  function createNewTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    handleCreateNewTask(newTask)

    setNewTask('')
  }

  function onChangeCreateNewTask(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  return (
    <form className={styles.taskContainer} onSubmit={createNewTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={onChangeCreateNewTask}
        value={newTask}
      />
      <button type="submit">
        <span>Criar</span>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
