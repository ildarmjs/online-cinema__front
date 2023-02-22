import { FC } from 'react'

import AuthButton from '@/ui/video-player/AuthPlaceholder/AuthButton'

import { useAuth } from '@/hooks/useAuth'
import ReactStars from 'react-rating-stars-component'
import s from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
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
						<ReactStars
							value={rating}
							
							activeColor={'yellow'}
							onChange={handleClick}
							size={60}
						/>
					)}
				</>
			) : (
				<AuthButton slug={slug} />
			)}
		</div>
	)
}

export default RateMovie
