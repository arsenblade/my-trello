import {FC} from 'react'
import { ITask } from '../../../../../types/board.types'
import styles from './Task.module.scss'

interface TaskItemProps {
  task: ITask
}

const TaskItem:FC<TaskItemProps> = ({task}) => {
  return (
    <div className={styles.taskItem}>
      <div className={styles.headerTask}>
        <h3 className={styles.titleTask}>{task.titleTask}</h3>
        <button className={styles.closeBtn}>X</button>
      </div>
      <p className={styles.description}>{task.description}</p>
    </div>
  )
}

export default TaskItem