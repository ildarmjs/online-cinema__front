import { FC } from 'react'
import s from './AuthPlaceholder.module.scss'
import AuthButton from './AuthButton'

const AuthPlaceholder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div className={s.placeholder}>
			<div>
				<div>You must be logged in to start watching</div>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}

export default AuthPlaceholder
