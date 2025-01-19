import { Header } from './components/Header'
import styles from './App.module.css'
import { Task } from './components/Task'

export function App() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Task />
      </div>
    </main>
  )
}
