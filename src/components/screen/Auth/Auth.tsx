import React, { FC, FormEvent, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../ui/Button/Button'
import Input from '../../ui/Input/Input'
import styles from './Auth.module.scss'

interface IAuthProps {
  type: 'registration' | 'login'
}

const Auth:FC<IAuthProps> = ({type}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const {login, register} = useActions()
  const {user, isLoading} = useAuth()
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(type === 'registration') {
      register({email, password, name})
    }
    if(type === 'login') {
      login({email, password})
    }
  }

  if(isLoading === true || user) {
    navigate('/')
    return (null)
  }

  return (
    <form className={styles.authForm} onSubmit={(e) => handleSubmit(e)}>
      <h1>{type === 'registration' ? 'Регистрация' : 'Авторизация'}</h1>
      <Input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <Input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      {type === 'registration' && <Input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />}
      {type === 'login' &&
        <div className={styles.btnContainer}>
          <Link to='/registration'>Зарегистрироваться</Link>
          <Button>Войти</Button>
        </div>
      }
      {type === 'registration' &&
        <div className={styles.btnContainer}>
          <Link to='/login'>Войти</Link>
          <Button>Зарегистрироваться</Button>
        </div>
      }
    </form>
  )
}

export default Auth