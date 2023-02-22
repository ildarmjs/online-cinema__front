import {FC} from 'react'
import { IAdminTableItem } from './admin-table.interface'
import AdminActions from './AdminActions/AdminActions'

import s from './AdminTable.module.scss'

const AdminTableItem: FC<IAdminTableItem> = ({ tableItem, removeHandler }) => {
	return (
		<div className={s.item}>
			{tableItem.items.map(value => (
				<div key={value}>{value}</div>
			))}

			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}

export default AdminTableItem