import { useRouter } from 'next/router'
import { FC } from 'react'
import s from './Menu.module.scss'
import cn from 'classnames'
import { IMenuItem } from './menu.interface'
import Link from 'next/link'
import MaterialIcon from '@/components/ui/MaterialIcon'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[s.active]: asPath === item.link,
			})}
		>
			<Link legacyBehavior href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
