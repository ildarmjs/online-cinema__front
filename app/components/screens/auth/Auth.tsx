import { useAuth } from '@/hooks/useAuth'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from './auth.interface'
import { useAuthRedirect } from './useAuthRedirect'
import s from './Auth.module.scss'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'
import Button from '@/components/ui/form-elements/Button'
import AuthField from './AuthFields'
import AuthFields from './AuthFields'
import { useActions } from '@/hooks/useActions'

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()
	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const {login, register} = useActions()

	

	const onSubmit: SubmitHandler<IAuthInput> = data => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}
	return (
		<>
			<Meta title='Auth'>
				<section className={s.wrapper}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Heading title='Auth' className='mb-6' />


						<AuthFields formState={formState} register={registerInput} isPasswordRequired/>

						<div className={s.buttons}>
							<Button
								type='submit'
								onClick={() => setType('login')}
								disabled={isLoading}
							>
								Login
							</Button>
							<Button
								type='submit'
								onClick={() => setType('register')}
								disabled={isLoading}
							>
								Register
							</Button>
						</div>
					</form>
				</section>
			</Meta>
		</>
	)
}

export default Auth
