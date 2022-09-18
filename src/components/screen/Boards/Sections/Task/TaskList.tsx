import {FC} from 'react'
import { ITask } from '../../../../../types/board.types'
import TaskItem from './TaskItem'
import styles from './Task.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'

interface TaskListProps {
  tasks: ITask[]
  boardId: string,
  sectionId: string,
}

const TaskList:FC<TaskListProps> = ({tasks, boardId, sectionId}) => {
  const {colorTheme} = useTypedSelector(state => state.theme)

  return (
    <div className={cn(styles.taskList, {
      [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
      [styles.classicTheme]: colorTheme === 'classic'
    })}>
      {tasks.map((task) => <TaskItem key={task.idTask} task={task} boardId={boardId} sectionId={sectionId}/>)}
    </div>
  )
}

export default TaskList