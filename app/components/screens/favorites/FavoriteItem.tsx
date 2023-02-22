import { IMovie } from '@/shared/types/movie.types'
import { getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import FavoriteButton from '../single-movie/FavoiteButton/FavoriteButton'
import { IFavoriteItem } from './favorite.interface'



import s from './Favorites.module.scss'


const FavoriteItem: FC<{ movie: IMovie}> = ({ movie }) => {
	return (
		<div className={s.itemWrapper}>
			<FavoriteButton movieId={movie._id} />
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a className={s.item}>
					<Image
						alt={movie.title}
						src={movie.bigPoster}
						layout='fill'
						draggable={false}
						priority
					/>

					<div className={s.title}>{movie.title}</div>
				</a>
			</Link>
		</div>
	)
}

export default FavoriteItem
