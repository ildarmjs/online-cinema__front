import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link legacyBehavior href='/'>
			<a className='px-layout mb-10 block text-3xl text-bold text-white'>
				{/* <Image
					src={logoImage}
					width={247}
					height={34}
					alt='Online-cinema'
					draggable={false}
				/> */}
				Online Cinema
			</a>
		</Link>
	)
}

export default Logo
