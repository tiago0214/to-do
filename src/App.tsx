import { Header } from './components/Header'
import styles from './App.module.css'
import { CreateTask } from './components/CreateTask'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <CreateTask />
        <Tasks />
      </div>
    </main>
  )
}
