import {FC} from 'react'
import { ITask } from '../../../../../types/board.types'
import TaskItem from './TaskItem'
import styles from './Task.module.scss'

interface TaskListProps {
  tasks: ITask[]
  boardId: string,
  sectionId: string,
}

const TaskList:FC<TaskListProps> = ({tasks, boardId, sectionId}) => {

  return (
    <div className={styles.taskList}>
      {tasks.map((task) => <TaskItem key={task.idTask} task={task} boardId={boardId} sectionId={sectionId}/>)}
    </div>
  )
}

export default TaskList