export const API_URL = 'http://localhost:8000'

export const getLoginUrl = () => '/login'
export const getRegisterUrl = () => '/users'
export const getUsersUrl = () => '/users'
export const getBoardsUrl = (string?: string) => string ? '/boards/' + string : '/boards'