import { getGenreUrl } from 'config/url.config'
import Link from 'next/link'
import { FC } from 'react'
import CollectionImage from './CollectionImage'
import { ICollection } from './collections.interface'
import s from './Collections.module.scss'


const CollectionItem: FC<{ collection: ICollection }> = ({ collection }) => {
	return (
		<Link legacyBehavior href={getGenreUrl(collection.slug)}>
			<a className={s.collection}>
				<CollectionImage collection={collection} />

				<div className={s.content}>
					<div className={s.title}>{collection.title}</div>
				</div>

				<div className={`${s.behind} ${s.second}`}>
					<CollectionImage collection={collection} />
				</div>

				<div className={`${s.behind} ${s.third}`}>
					<CollectionImage collection={collection} />
				</div>
			</a>
		</Link>
	)
}

export default CollectionItem
