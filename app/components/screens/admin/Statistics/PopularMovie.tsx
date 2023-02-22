import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import {FC} from 'react'
import { useQuery } from 'react-query'
import s from '../Admin.module.scss'
import cn from 'classnames'
import { getMovieUrl } from 'config/url.config'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import SubHeading from '@/components/ui/heading/SubHeading'
import Link from 'next/link'
import Image from 'next/image'


const PopularMovie: FC = () => {
	const { isLoading, data: movie} = useQuery('Most popular movie in admin', () =>
		MovieService.getMostPopularMovies(), {
			select: (data):IMovie => data[0] 
		}
	)
  return (
		<div className={cn(s.block, s.popular)}>
			<SubHeading title='The most popular movie' />
			{isLoading ? (
				<SkeletonLoader className='h-48' />
			) : (
				movie && (
					<>
						<h3>Opened {movie.countOpened} times</h3>
						<Link legacyBehavior href={getMovieUrl(movie.slug)}>
							<a>
								<Image
									width={285}
									height={176}
									src={movie.bigPoster}
									alt={movie.title}
									className={s.image}
									unoptimized
								/>
							</a>
						</Link>
					</>
				)
			)}
		</div>
	) 
}

export default PopularMovie