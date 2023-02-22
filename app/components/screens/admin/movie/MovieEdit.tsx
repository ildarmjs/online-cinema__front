import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Button from '@/components/ui/form-elements/Button'
import Field from '@/components/ui/form-elements/Field'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import formStyles from '../../../ui/form-elements/admin-form.module.scss'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import { useAdminGenres } from './useAdminGenres'
import { useAdminActors } from './useAdminActors'
import dynamic from 'next/dynamic'

const DynamicSelect = dynamic(() => import ('@/ui/select/Select'), {
	ssr: false
})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IMovieEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)
	const {isLoading: isGenresLoading, data:genres} = useAdminGenres()
	const {isLoading: isActorsLoading, data:actors} = useAdminActors()


	return (
		<Meta title='Edit Actor'>
			<AdminNavigation />
			<Heading title='Edit Actor' />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('title', {
									required: 'Title is required',
								})}
								placeholder='Title'
								error={errors.title}
								style={{ width: '31%' }}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('title')))
								}}
							/>

							<Field
								{...register(`parameters.country`, {
									required: 'Country is required',
								})}
								placeholder='Country'
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							


							<Field
								{...register('parameters.duration', {
									required: 'Duration is required!',
								})}
								placeholder='Duration (min.)'
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Year is required!',
								})}
								placeholder='Year'
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>

							<Controller
								control={control}
								name='genres'
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										field={field}
										options={genres || []}
										isLoading={isGenresLoading}
										isMulti
										error={error}
										placeholder='Poster'
									/>
								)}
								rules={{
									required: 'Please select at least on genre',
								}}
							/>

							<Controller
								name='actors'
								control={control}
								rules={{
									required: 'Please select at least one actor!',
								}}
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										field={field}
										placeholder='Actors'
										options={actors || []}
										isLoading={isActorsLoading}
										isMulti
									/>
								)}
							/>

							<Controller
								control={control}
								name='poster'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='Poster'
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name='bigPoster'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='bigPoster'
									/>
								)}
								rules={{
									required: 'bigPoster is required',
								}}
							/>
							<Controller
								control={control}
								name='videoUrl'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='movies'
										placeholder='Video'
										isNoImage
										style={{ marginTop: -25 }}
									/>
								)}
								rules={{
									required: 'Video is required',
								}}
							/>
						</div>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
