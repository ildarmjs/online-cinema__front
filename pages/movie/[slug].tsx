import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { MovieService } from '@/services/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { getMovieUrl } from 'config/url.config'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Error404 from '../404'

export interface IMoviePage {
	movie: IMovie | undefined
	similarMovies: IGalleryItem[]
}

const SingleMoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie movie={movie} similarMovies={similarMovies} />
	) : (
		<Error404 />
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const paths = movies.map(movie => ({
			params: { slug: movie.slug },
		}))

		return { paths, fallback: 'blocking' }
	} catch {
		return {
			paths: [],
			fallback: false,
		}
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getBySlug(String(params?.slug))

		const responseSimilarMovies = await MovieService.getByGenres(
			movie.genres.map(g => g._id)
		)

		const similarMovies: IGalleryItem[] = responseSimilarMovies.data
			.filter(m => m._id !== movie._id)
			.map(m => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: { movie, similarMovies },
		}
	} catch (e) {
		console.log(errorCatch(e))

		return {
			notFound: true,
		}
	}
}

export default SingleMoviePage
