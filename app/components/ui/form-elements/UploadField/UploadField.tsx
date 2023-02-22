import { useUpload } from './useUpload'
import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'


import s from '../form.module.scss'
import { IUploadField } from '../form.interface'
import SkeletonLoader from '../../SkeletonLoader'

const UploadField: FC<IUploadField> = ({
	placeholder,
	error,
	style,
	value,
	folder,
	onChange,
	isNoImage = false,
}) => {
	const { uploadImage, isLoading } = useUpload(onChange, folder)

	return (
		<div className={cn(s.field, s.uploadField)} style={style}>
			<div className={s.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input type='file' onChange={uploadImage} />
					{error && <div className={s.error}>{error.message}</div>}
				</label>
				{!isNoImage && (
					<div className={s.uploadImageContainer}>
						{isLoading ? (
							<SkeletonLoader count={1} className='w-full h-full' />
						) : (
							value && <Image src={value} alt='' layout='fill' unoptimized />
						)}
					</div>
				)}
			</div>
		</div>
	)
}

export default UploadField
