import { FC, PropsWithChildren } from 'react'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import s from './Layout.module.scss'

const Layout:FC<PropsWithChildren> = ({children}) => {
  return (
	 <div className={s.layout}>
		<Navigation/>
		<div className={s.center}>{children}</div>
		<Sidebar/>
	 </div>
  )
}

export default Layout