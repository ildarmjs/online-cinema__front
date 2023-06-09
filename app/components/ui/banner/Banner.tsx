import Image from 'next/image'
import React, { FC } from 'react'

import s from './Banner.module.scss'

interface IBanner {
	imagePath: string
	Detail?: FC | null
}

const Banner: FC<IBanner> = ({ imagePath, Detail }) => {
	return (
		<div className={s.banner}>
			<Image
				alt=''
				src={imagePath}
				draggable={false}
				layout='fill'
				className='image-like-bg object-top'
				unoptimized
				priority
			/>
			{Detail && <Detail />}
		</div>
	)
}

export default Banner
