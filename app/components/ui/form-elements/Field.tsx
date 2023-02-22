import { forwardRef } from 'react'
import { IField } from './form.interface'
import s from './form.module.scss'
import cn from 'classnames'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={cn(s.common, s.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={s.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'
export default Field
