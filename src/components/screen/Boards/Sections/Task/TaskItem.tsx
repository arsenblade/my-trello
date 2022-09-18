import {FC} from 'react'
import { useActions } from '../../../../../hooks/useActions'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import { ITask } from '../../../../../types/board.types'
import styles from './Task.module.scss'

interface TaskItemProps {
  task: ITask,
  boardId: string,
  sectionId: string,
}

const TaskItem:FC<TaskItemProps> = ({task, boardId, sectionId}) => {

  const {deleteTask} = useActions()

  return (
    <div className={styles.taskItem}>
      <div className={styles.headerTask}>
        <h3 className={styles.titleTask}>{task.titleTask}</h3>
        <button className={styles.closeBtn} onClick={() => deleteTask({boardId, sectionId, taskId: task.idTask})}>X</button>
      </div>
      <p className={styles.description}>{task.description}</p>
    </div>
  )
}

export default TaskItem