import { getGenresUrl } from './../config/api.config'
import axios from 'api/interceptors'
import { IGenre } from '@/shared/types/movie.types'
import { axiosClassic } from 'api/interceptors'
import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'
import { ICollection } from '@/components/screens/collections/collections.interface'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenresUrl(``), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},

	async update(_id: string, data: IGenreEditInput) {
		return axios.put<string>(getGenresUrl(`/${_id}`), data)
	},
	async create() {
		return axios.post<string>(getGenresUrl(`/`))
	},

	async getById(_id: string) {
		return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
	},

	async getCollections() {
		return axiosClassic.get<ICollection[]>(getGenresUrl('/collections'))
	},

	async delete(_id: string) {
		return axios.delete<string>(getGenresUrl(`/${_id}`))
	},
}
