import SkeletonLoader from '@/components/ui/SkeletonLoader'
import { FC } from 'react'
import cn from 'classnames'
import s from '../Admin.module.scss'
import { AdminService } from '@/services/admin.service'
import { useQuery } from 'react-query'

const CountUsers: FC = () => {
	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	)

	return (
		<div className={cn(s.block, s.countUsers)}>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : (
					<div className={s.number}>{response?.data}</div>
				)}
				<div className={s.description}>users</div>
			</div>
		</div>
	)
}

export default CountUsers
