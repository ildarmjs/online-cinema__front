import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Heading from '@/components/ui/heading/Heading'
import Meta from '@/utils/meta/Meta'
import {FC} from 'react'
import s from './Admin.module.scss'
import Statistics from './Statistics/Statistics'

const Admin: FC = () => {
  return <Meta title='Admin panel'>
	<AdminNavigation/>
	<Heading title='Some statistics'/>
	<Statistics/>
  </Meta>
}

export default Admin