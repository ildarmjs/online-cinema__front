import { FC } from 'react'
import GalleryItem from './GalleryItem'
import s from './Gallery.module.scss'
import { IGalleryItem } from './gallery.interface'

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	return (
		<div className={s.gallery}>
			{items.map(item => (
				<GalleryItem key={item.url} item={item} variant='vertical' />
			))}
		</div>
	)
}

export default Gallery
