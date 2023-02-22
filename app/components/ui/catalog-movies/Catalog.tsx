import Meta from '@/utils/meta/Meta'
import { getMovieUrl } from 'config/url.config'
import {FC} from 'react'
import GalleryItem from '../gallery/GalleryItem'
import Description from '../heading/Description'
import Heading from '../heading/Heading'
import { ICatalog } from './catalog.interface'
import s from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({movies, title, description}) => {
  return (
		<Meta title={title} description={description}>
			<Heading title={title} className={s.heading} />

			{description && (
				<Description text={description} className={s.description} />
			)}

			<section className={s.movies}>
				{movies.map(movie => (
					<GalleryItem
						key={movie._id}
						item={{
							name: movie.title,
							url: getMovieUrl(movie.slug),
							posterPath: movie.bigPoster,
							content: {
								title: movie.title,
							},
						}}
						variant='horizontal'
					/>
				))}
			</section>
		</Meta>
	) 
}

export default Catalog