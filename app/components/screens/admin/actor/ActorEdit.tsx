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
import { IActorEditInput } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'
import formStyles from '../../../ui/form-elements/admin-form.module.scss'
import { stripHtml } from 'string-strip-html'
import dynamic from 'next/dynamic'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'



const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		control,
		setValue,
		getValues,
	} = useForm<IActorEditInput>({
		mode: 'onChange',
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)
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
								{...register('name', {
									required: 'Name is required',
								})}
								placeholder='Name'
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<SlugField
								register={register}
								error={errors.slug}
								generate={() => {
									setValue('slug', generateSlug(getValues('name')))
								}}
							/>
							<Controller
								control={control}
								name='photo'
								defaultValue=''
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										value={value}
										error={error}
										folder='actors'
										placeholder='Photo'
									/>
								)}
								rules={{
									required: 'Photo is required',
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

export default ActorEdit
