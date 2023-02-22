import dynamic from 'next/dynamic'
import { FC } from 'react'
import AuthItems from './auth/AuthItems'
import { IMenu } from './menu.interface'
import s from './Menu.module.scss'
import MenuItem from './MenuItem'

const DynamicAuthItems = dynamic(() => import('./auth/AuthItems'), {
	ssr:false
})

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	
	return (
		<div className={s.menu}>
			<div className={s.heading}>{title}</div>
			<ul className={s.ul}>
				{items.map(item => (
					<MenuItem key={item.link} item={item} />
				))}
				{title === 'General' ? <DynamicAuthItems /> : null}
			</ul>
		</div>
	)
}

export default Menu
