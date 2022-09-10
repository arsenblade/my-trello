import React, { FC } from 'react'

interface IAuthProps {
  type?: 'registration' | 'login'
}

const Auth:FC<IAuthProps> = ({type}) => {
  return (
    <form>
      <h1></h1>
      <input type="text" />
      <input type="text" />
      {type === 'registration' && <input type="text" />}
      <button></button>
    </form>
  )
}

export default Auth