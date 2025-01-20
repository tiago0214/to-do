import { Header } from './components/Header'
import styles from './App.module.css'
import { Tasks } from './components/Tasks'

export function App() {
  return (
    <main>
      <Header />
      <div className={styles.container}>
        <Tasks />
      </div>
    </main>
  )
}
