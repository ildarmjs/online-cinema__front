import Button from '@/components/ui/form-elements/Button'
import Heading from '@/components/ui/heading/Heading'
import SkeletonLoader from '@/components/ui/SkeletonLoader'
import Meta from '@/utils/meta/Meta'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import AuthFields from '../auth/AuthFields'
import { IProfileInput } from './profile.interface'
import s from './Profile.module.scss'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		})

	const {isLoading, onSubmit} = useProfile(setValue)	
	return (
		<Meta title='Profile'>
			<Heading title='Profile' />
			<form onSubmit={handleSubmit(onSubmit)} className={s.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields
						register={register}
						formState={formState}
					/>
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile
