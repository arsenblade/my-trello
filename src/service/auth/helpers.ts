import { IUserState } from "../../store/user/user.interface"
import { IUser } from "../../types/user.types"

export const saveTokenStorage = (token: string, user: IUser) => {
  localStorage.setItem('accessToken', token)
  localStorage.setItem('user', JSON.stringify({
    email: user.email,
    id: user.id
  }))
}

export const removeTokenStorage = () => {
  localStorage.removeItem('accessToken')
}