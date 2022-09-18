import {useEffect} from 'react'
import { useParams } from 'react-router'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import SectionsItem from './SectionsItem'
import styles from './Sections.module.scss'
import { useActions } from '../../../../hooks/useActions'
import { useAuth } from '../../../../hooks/useAuth'
import cn from 'classnames'


const SectionsList = () => {
  const {id} = useParams()
  const {boards} = useTypedSelector(state => state.board)
  const {user, isLoading} = useAuth()
  const findBoard = boards.find(board => board.id === id)
  const {getBoards, changeCurrentBoard, openModal, clearCurrentBoard} = useActions()
  const {colorTheme} = useTypedSelector(state => state.theme)

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

  useEffect(() => {
    return () => {
      clearCurrentBoard()
    };
  }, [])

  return (
    <div className={cn(styles.sectionList, {
      [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
      [styles.classicTheme]: colorTheme === 'classic'
    })}>
      {findBoard?.sections.map(section => <SectionsItem key={section.idSection} section={section} boardId={findBoard.id} />)}
      <div className={styles.columnAdd} onClick={() => openModal({title: 'Добавить колонку', type: 'section'})}><span>Добавить колонку</span></div>
    </div>
  )
}

export default SectionsList