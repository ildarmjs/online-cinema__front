import { FC } from 'react'

import AuthButton from '@/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'

import s from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
// import StarRatingComponent from 'react-star-rating-component'
interface IRateMoives {
	id: string
	slug: string
}
const RateMovie: FC<IRateMoives> = ({ slug, id }) => {
	const { user } = useAuth()
	const { handleClick, isSended, rating } = useRateMovie(id)

	return (
		<div className={s.wrapper}>
			<h3>How do you like the movie?</h3>
			<p>Ratings improve recommendations</p>
			{user ? (
				<>
					{isSended ? (
						<div className={s.thanks}>Thanks for rating!</div>
					) : (
						<div>Рейтинг {rating}/5</div>
						// <StarRatingComponent
						// 	name='app6'
						// 	value={rating}
						// 	starCount={5}
						// 	starColor='#F3D954'
						// 	emptyStarColor='#F3D954'
						// 	onStarClick={handleClick}
						// 	onStarHover={handleClick}
						// 	// size={60}
						// />
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
