import MaterialIcon from '@/components/ui/MaterialIcon'
import { IMovie } from '@/shared/types/movie.types'
import { getActorUrl, getGenreUrl } from 'config/url.config'
import {FC} from 'react'
import FavoriteButton from '../FavoiteButton/FavoriteButton'
import s from './Content.module.scss'
import ContentList from './ContentList/ContentList'

const Content: FC<{ movie: IMovie }> = ({movie}) => {
	return (
		<div className={s.content}>
			<h1>{movie.title}</h1>
			{/* <FavoriteButton movieId={movie._id} />
			<div className={s.rating}>
				<MaterialIcon name='MdStarRate' />
				<span>{movie.rating.toFixed(1)}</span>
			</div> */}
			<div className={s.details}>
				<span>{movie.parameters.year} · </span>
				<span>{movie.parameters.country} · </span>
				<span>{movie.parameters.duration} min.</span>
			</div>
			<ContentList
				name='Genres'
				links={movie.genres.map(g => ({
					link: getGenreUrl(g.slug),
					title: g.name,
					_id: g._id,
				}))}
			/>
			<ContentList
				name='Actors'
				links={movie.actors.map(a => ({
					link: getActorUrl(a.slug),
					title: a.name,
					_id: a._id,
				}))}
			/>

			<div className={s.rating}>
				<MaterialIcon name='MdStarRate' />
				<span>{movie.rating.toFixed(1)}</span>
			</div>

			<FavoriteButton movieId={movie._id}/>
		</div>
	)
}

export default Content