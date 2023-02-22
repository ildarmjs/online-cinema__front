// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Home from '@/components/screens/admin/home/Home'
import { IHome } from '@/components/screens/admin/home/home.interface'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { ActorService } from '@/services/actor.service'
import { MovieService } from '@/services/movie.service'
import { getGenresList } from '@/utils/movie/getGenresList'
import { getActorUrl, getMovieUrl } from 'config/url.config'
import { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<IHome> = ({ slides, actors, trendingMovies}) => {
	return (
		<Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
	)
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: movies } = await MovieService.getAll()
		const slides: ISlide[] = movies.slice(0, 4).map(m => ({
			_id: m._id,
			link: getMovieUrl(m.slug),
			subTitle: getGenresList(m.genres),
			title: m.title,
			bigPoster: m.bigPoster,
		}))

		const { data: dataActors } = await ActorService.getAll()
		const actors: IGalleryItem[] = dataActors.slice(0, 7).map(a => ({
			name: a.name,
			posterPath: a.photo,
			url: getActorUrl(a.slug),
			content: {
				title: a.name,
				subTitle: `+${a.countMovies} movies`,
			},
		}))

		const dataTrendingMovies = await MovieService.getMostPopularMovies()
		const trendingMovies: IGalleryItem[] = dataTrendingMovies
			.slice(0, 7)
			.map(m => ({
				name: m.title,
				posterPath: m.poster,
				url: getMovieUrl(m.slug),
			}))

		return {
			props: {
				slides,
				actors,
				trendingMovies
			} as IHome,
		}
	} catch (error) {
		return {
			props: {
				slides: [],
				actors: [],
				trendingMovies: [],
			},
		}
	}
}

export default HomePage
