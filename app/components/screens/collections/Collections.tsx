import { FC } from 'react'
import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import s from './Collections.module.scss'
import { ICollection } from './collections.interface'
import Meta from '@/utils/meta/Meta'
import CollectionItem from './CollectionItem'


const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading title={title} className={s.heading} />
			<Description text={description} className={s.description} />

			<section className={s.collections}>
				{collections.map(collection => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
