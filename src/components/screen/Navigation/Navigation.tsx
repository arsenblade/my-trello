import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../ui/Button/Button'
import MySelect from '../../ui/Select/Select'
import { IOptions } from '../../ui/Select/select.interface'
import styles from './Navigation.module.scss'

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
  const navigation = useNavigate()
  const {user, isLoading} = useAuth()
  const {logout} = useActions()
  const [sortType, setSortType] = useState({value: 'black', label: 'Темная'})

  if(isLoading) {
    return (
      <div className={styles.navigation}>

      </div>)
  }

  return (
  !user ? 
    <div className={styles.navigation}>
      <span className={styles.selectLabel}>Тема: </span>
      <MySelect options={optionsTheme} setSortType={setSortType} value={sortType} />
    </div> :
    <div className={styles.navigation}>
      <span className={styles.selectLabel}>Тема: </span>
      <MySelect options={optionsTheme} setSortType={setSortType} value={sortType} />
      <Button className={styles.btnLogout} onClick={() => logout()}>Выйти</Button>
    </div>
  )
}

export default Navigation