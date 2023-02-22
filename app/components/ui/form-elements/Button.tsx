import {FC, PropsWithChildren} from 'react'
import { IButton } from './form.interface'
import cn from 'classnames'
import s from './form.module.scss'

const Button: FC<IButton> = ({children, className, ...rest}) => {
  return <button className={cn(s.button, className)} {...rest}>
	{children}
  </button>
}

export default Button

