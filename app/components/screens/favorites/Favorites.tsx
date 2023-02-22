import { FC } from 'react'
import Heading from '@/components/ui/heading/Heading'
import FavoriteItem from './FavoriteItem'
import s from './Favorites.module.scss'
import { useFavorites } from './useFavorites'
import Meta from '@/utils/meta/Meta'
import SkeletonLoader from '@/components/ui/SkeletonLoader'



const Favorites: FC = () => {
	const { favoriteMovies, isLoading } = useFavorites()

	return (
		<Meta title='Favorites'>
			<Heading title={'Favorites'} />
			<section className={s.favorites}>
				{isLoading ? (
					<SkeletonLoader
						count={3}
						className={s.skeletonLoader}
						containerClassName={s.containerLoader}
					/>
				) : (
					favoriteMovies?.map(movie => (
						<FavoriteItem
							key={movie._id}
							movie={movie}
						/>
					))
				)}
			</section>
		</Meta>
	)
}

export default Favorites
