import {FC} from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { ISection } from '../../../../types/board.types'
import styles from './Sections.module.scss'
import TaskList from './Task/TaskList'

interface SectionsItemProps {
  section: ISection
}

const SectionsItem:FC<SectionsItemProps> = ({section}) => {
  const {openModal, addSectionId} = useActions()

  const handleTaskAdd = () => {
    addSectionId(section.idSection)
    openModal({title: 'Добавить карточку', type: "task"})
  }

  return (
    <div className={styles.sectionItem}>
      <h2 className={styles.titleSection}>{section.titleSection}</h2>
      <TaskList tasks={section.tasks} />
      <button className={styles.btnAddTask} onClick={() => handleTaskAdd()}>Добавить карточку</button>
    </div>
  )
}

export default SectionsItem