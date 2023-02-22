import { FC } from 'react'
import s from './AdminTable.module.scss'
import AdminTableItem from './AdminTableItem'
import { ITableItem } from './admin-table.interface'
import AdminTableHeader from './AdminTableHeader'
import SkeletonLoader from '../../SkeletonLoader'


interface IAdminTable {
	tableItems: ITableItem[]
	headerItems: string[]
	isLoading: boolean
	removeHandler: (id: string) => void
}


const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	isLoading,
	removeHandler,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />

			{isLoading ? (
				<SkeletonLoader count={1} height={48} className='mt-4' />
			) : tableItems.length ? (
				tableItems.map(tableItem => (
					<AdminTableItem
						key={tableItem._id}
						tableItem={tableItem}
						removeHandler={() => removeHandler(tableItem._id)}
					/>
				))
			) : (
				<div className={s.notFound}>Elements not found</div>
			)}
		</div>
	)
}

export default AdminTable
