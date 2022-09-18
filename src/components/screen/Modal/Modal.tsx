import { FC, useState } from "react"
import { useActions } from "../../../hooks/useActions"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import Input from "../../ui/Input/Input"
import styles from './Modal.module.scss'
import cn from 'classnames'
import Button from "../../ui/Button/Button"
import { useAuth } from "../../../hooks/useAuth"


const Modal:FC = () => {
  const {type, isVisible, title} = useTypedSelector(state => state.modal)
  const [valueName, setValueName] = useState('')
  const [valueDescription, setValueDescription] = useState('')
  const {currentBoard, idCurrentSection} = useTypedSelector(state => state.board)
  const {closeModal, createBoard, addSection, addTask, clearSectionId} = useActions()
  const {user} = useAuth()
  const {colorTheme} = useTypedSelector(state => state.theme)

  const clearAndCloseModal = () => {
    setValueDescription('')
    setValueName('')
    closeModal()
  }

  const handleCreate = () => {
    if(user && type === 'board') {
      createBoard({titleBoard: valueName, userId: user.id})
      clearAndCloseModal()
    }
    if(user && type === 'section') {
      currentBoard && addSection({boardId: currentBoard.id, titleSection: valueName})
      clearAndCloseModal()
    }
    if(user && type === 'task') {
      currentBoard && addTask({userId: user.id, boardId: currentBoard.id, idSection: idCurrentSection, titleTask: valueName, description: valueDescription})
      clearSectionId()
      clearAndCloseModal()
    }
  }


  return (
    <div className={cn(styles.modalContainer, {
      [styles.close]: !isVisible,
      [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
      [styles.classicTheme]: colorTheme === 'classic'
    })} onClick={() => closeModal()}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.btnClose} onClick={() => closeModal()}>X</button>
        </div>
        <Input className={styles.nameField} type='text' value={valueName} onChange={(e) => setValueName(e.target.value)}/>
        {type === 'task' && <textarea className={styles.descriptionField} value={valueDescription} onChange={(e) => setValueDescription(e.target.value)}></textarea>}
        <Button className={styles.btnCreate} onClick={() => handleCreate()}>Создать</Button>
      </div>
    </div>
  )
}

export default Modal