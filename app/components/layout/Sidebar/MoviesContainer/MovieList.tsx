import Link from 'next/link'
import { FC } from 'react'
import { IMovieList } from './movie-list.interface'
import MovieItem from './MovieItem'
import s from './MovieList.module.scss'


const MovieList: FC<IMovieList> = ({ link, title, movies }) => {
	return (
		<div className={s.list}>
			<div className={s.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link legacyBehavior href={link}>
				<a className={s.button}>See more</a>
			</Link>
		</div>
	)
}

export default MovieList
