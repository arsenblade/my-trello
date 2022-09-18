import {useEffect} from 'react'
import { useParams } from 'react-router'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import SectionsItem from './SectionsItem'
import styles from './Sections.module.scss'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'


const SectionsList = () => {
  const {id} = useParams()
  const {boards} = useTypedSelector(state => state.board)
  const {user, isLoading} = useAuth()
  const findBoard = boards.find(board => board.id === id)
  const {getBoards, changeCurrentBoard, openModal} = useActions()

  useEffect(() => {
    if(user && !isLoading) {
      getBoards(user.id)
    }
  }, [isLoading])

  useEffect(() => {
    if(findBoard) {
      changeCurrentBoard(findBoard)
    }
  }, [findBoard])

  return (
    <div className={styles.sectionList}>
      {findBoard?.sections.map(section => <SectionsItem key={section.idSection} section={section} boardId={findBoard.id} />)}
      <div className={styles.columnAdd} onClick={() => openModal({title: 'Добавить колонку', type: 'section'})}><span>Добавить колонку</span></div>
    </div>
  )
}

export default SectionsList