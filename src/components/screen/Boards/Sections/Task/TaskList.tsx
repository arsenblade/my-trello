import {FC} from 'react'
import { ITask } from '../../../../../types/board.types'
import TaskItem from './TaskItem'
import styles from './Task.module.scss'

interface TaskListProps {
  tasks: ITask[]
}

const TaskList:FC<TaskListProps> = ({tasks}) => {

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => <TaskItem key={task.idTask} task={task} />)}
    </div>
  )
}

export default TaskList