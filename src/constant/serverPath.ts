export const API_URL = 'https://server-my-trello.onrender.com'

export const getLoginUrl = () => '/login'
export const getRegisterUrl = () => '/users'
export const getUsersUrl = () => '/users'
export const getBoardsUrl = (string?: string) => string ? '/boards/' + string : '/boards'