import { IMovie } from '@/shared/types/movie.types'
import Link from 'next/link'
import { FC } from 'react'
import s from './MovieList.module.scss'
import Image from 'next/image'
import MaterialIcon from '@/components/ui/MaterialIcon'
import { getGenreUrl, getMovieUrl } from 'config/url.config'
import { getGenresListEach } from '@/utils/movie/getGenresList'

const MovieItem:FC<{movie: IMovie}> = ({movie}) => {
  return (
		<div className={s.item}>
			<Link legacyBehavior href={getMovieUrl(movie.slug)}>
				<a>
					<Image
						alt={movie.title}
						width={65}
						height={97}
						src={movie.poster}
						draggable={false}
						priority
					/>
				</a>
			</Link>
			<div className={s.info}>
				<div>
					<div className={s.title}>{movie.title}</div>
					<div className={s.genres}>
						{movie.genres.map((genre, idx) => (
							<Link legacyBehavior key={genre._id} href={getGenreUrl(genre.slug)}>
								<a>{getGenresListEach(idx, movie.genres.length, genre.name)}</a>
							</Link>
						))}
					</div>
				</div>
				<div className={s.rating}>
					<MaterialIcon name='MdStarRate' />
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem