import Link from 'next/link'
import { useRouter } from 'next/router'
import {FC} from 'react'
import { INavItem } from './admin-navigation.interface'
import s from './AdminNavigation.module.scss'
import cn from 'classnames'

const AdminNavItem: FC<{item: INavItem}> = ({item: {link, title}}) => {

	const {asPath} = useRouter()

  return (
		<li>
			<Link legacyBehavior href={link}>
				<a
					href=''
					className={cn({
						[s.active]: asPath === link,
					})}
				>
					{title}
				</a>
			</Link>
		</li>
	)
}

export default AdminNavItem