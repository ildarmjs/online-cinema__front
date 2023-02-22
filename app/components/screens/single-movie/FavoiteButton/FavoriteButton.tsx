import { UserService } from '@/services/user.service'
import { toastError } from '@/utils/toast-error'
import cn from 'classnames'
import { FC, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useFavorites } from '../../favorites/useFavorites'
import s from './FavoriteButton.module.scss'
import HeartImage from './heart-animation.png'

const FavoriteButton: FC<{ movieId: string }> = ({ movieId }) => {
	const [isSmashed, setIsSmashed] = useState(false)

	const { favoriteMovies, refetch } = useFavorites()

	useEffect(() => {
		if (!favoriteMovies) return
		const isHasMovie = favoriteMovies.some(f => f._id === movieId)
		if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
		// if (favoriteMovies) {
		// 	const isHasMovie = favoriteMovies.some(f => f._id === movieId)
		// 	if (isSmashed !== isHasMovie) setIsSmashed(isHasMovie)
		// }
	}, [favoriteMovies, isSmashed, movieId])

	const { mutateAsync } = useMutation(
		'update favorites',
		() => UserService.toggleFavorite(movieId),
		{
			onError(error) {
				toastError(error, 'Update favorite list')
			},
			onSuccess() {
				setIsSmashed(!isSmashed)
				refetch()
			},
		}
	)

	return (
		<button
			onClick={() => mutateAsync()}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
			className={cn(s.button, {
				[s.animate]: isSmashed,
			})}
		>
			
		</button>
	)
}

export default FavoriteButton 
