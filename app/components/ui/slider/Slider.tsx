import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideArrow from './SlideArrow/SlideArrow'
import { ISlide } from './slider.interface'

import s from './Slider.module.scss'
import SlideItem from './SliderItem'

import { useSlider } from './useSlider'

interface ISlider {
	buttonTitle?: string
	slides: ISlide[]
}

const Slider: FC<ISlider> = ({ buttonTitle, slides }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={s.slider}>
			{isPrev && (
				<SlideArrow variant='left' clickHandler={() => handleClick('prev')} />
			)}

			<CSSTransition
				in={slideIn}
				timeout={300}
				classNames='slide-animation'
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isNext && (
				<SlideArrow variant='right' clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
