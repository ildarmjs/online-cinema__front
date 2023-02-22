import { FC } from 'react'
import { navItems } from './admin-navigation.data'
import s from './AdminNavigation.module.scss'
import AdminNavItem from './AdminNavItem'
const AdminNavigation: FC = () => {
	return (
		<nav className={s.nav}>
			<ul>
				{navItems.map(item => (
					<AdminNavItem key={item.link} item={item} />
				))}
			</ul>
		</nav>
	)
}

export default AdminNavigation
