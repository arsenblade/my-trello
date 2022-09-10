import React from 'react'
import { useNavigate } from 'react-router'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../ui/Button/Button'
import styles from './Navigation.module.scss'

const Navigation = () => {
  const naviation = useNavigate()
  const {user, isLoading} = useAuth()
  const {logout} = useActions()

  if(isLoading) {
    return (
      <div className={styles.navigation}>

      </div>)
  }

  return (
  !user ? 
    <div className={styles.navigation}>
      <Button onClick={() => naviation('login')}>Авторизоваться</Button>
      <Button onClick={() => naviation('registration')}>Зарегистрироваться</Button>
    </div> :
    <div className={styles.navigation}>
      <Button onClick={() => logout()}>Выйти</Button>
    </div>
  )
}

export default Navigation