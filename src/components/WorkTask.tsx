import { Circle, CheckCircle, Trash } from '@phosphor-icons/react'

import styles from './WorkTask.module.css'

interface WorkTaskProps {
  isCompleted: boolean
}

export function WorkTask({ isCompleted }: WorkTaskProps) {
  return (
    <div className={styles.workTask}>
      <a href="" className={styles.check}>
        <CheckCircle size={17} weight="fill" />
      </a>

      <p className={isCompleted ? styles.workTextComplete : styles.workText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>

      <a href="" className={styles.trash}>
        <Trash />
      </a>
    </div>
  )
}
