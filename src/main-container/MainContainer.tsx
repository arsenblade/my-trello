import { FC, ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom';

interface MainContainerProps {
  children: ReactNode
}

const MainContainer:FC<MainContainerProps> = ({children}) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default MainContainer