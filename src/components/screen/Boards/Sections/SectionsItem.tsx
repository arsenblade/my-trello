import {FC} from 'react'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import { ISection } from '../../../../types/board.types'
import styles from './Sections.module.scss'
import TaskList from './Task/TaskList'

interface SectionsItemProps {
  section: ISection,
  boardId: string
}

const SectionsItem:FC<SectionsItemProps> = ({section, boardId}) => {
  const {openModal, addSectionId, deleteSection} = useActions()

  const handleTaskAdd = () => {
    addSectionId(section.idSection)
    openModal({title: 'Добавить карточку', type: "task"})
  }

  return (
    <div className={styles.sectionItem}>
      <div className={styles.header}>
        <h2 className={styles.titleSection}>{section.titleSection}</h2>
        <button className={styles.closeBtn} onClick={() => deleteSection({boardId, sectionId: section.idSection})}>X</button>
      </div>
      <TaskList tasks={section.tasks} boardId={boardId} sectionId={section.idSection} />
      <button className={styles.btnAddTask} onClick={() => handleTaskAdd()}>Добавить карточку</button>
    </div>
  )
}

export default SectionsItem