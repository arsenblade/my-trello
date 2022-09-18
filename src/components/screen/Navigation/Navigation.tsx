import { useEffect, useState } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../ui/Button/Button'
import MySelect from '../../ui/Select/Select'
import { IOptions } from '../../ui/Select/select.interface'
import styles from './Navigation.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Link } from 'react-router-dom'

const optionsTheme: IOptions[] = [
  {
    value: 'classic',
    label: 'Класическая'
  },
  {
    value: 'black',
    label: 'Темная'
  },
  {
    value: 'space',
    label: 'Космос'
  }
]

const Navigation = () => {
  const {user, isLoading} = useAuth()
  const {logout} = useActions()
  const {changeColor} = useActions()
  const {colorTheme} = useTypedSelector(state => state.theme)
  const {currentBoard} = useTypedSelector(state => state.board)
  const [sortType, setSortType] = useState({value: 'black', label: 'Темная'})

  useEffect(() => {
    changeColor(sortType.value)
  }, [sortType])

  if(isLoading) {
    return (
      <div className={cn(styles.navigation, {
        [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
        [styles.classicTheme]: colorTheme === 'classic'
      })}>

      </div>)
  }

  return (
  !user ? 
    <div className={cn(styles.navigation, {
      [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
      [styles.classicTheme]: colorTheme === 'classic'
    })}>
      <span className={styles.selectLabel}>Тема: </span>
      <MySelect options={optionsTheme} setSortType={setSortType} value={sortType} />
    </div> :
    <div className={cn(styles.navigation, {
      [styles.blackTheme]: colorTheme === 'black' || colorTheme === 'space',
      [styles.classicTheme]: colorTheme === 'classic'
    })}>
      {currentBoard && <Link to='/'><Button className={styles.backBtn}>Назад</Button></Link>}
      <span className={styles.selectLabel}>Тема: </span>
      <MySelect options={optionsTheme} setSortType={setSortType} value={sortType} />
      <Button className={styles.btnLogout} onClick={() => logout()}>Выйти</Button>
    </div>
  )
}

export default Navigation