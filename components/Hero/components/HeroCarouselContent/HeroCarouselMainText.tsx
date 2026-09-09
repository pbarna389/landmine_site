import { TEXT_VARIANTS } from './constants/constants'

type CarouselMainText = {
	mainText: string[]
}

export const HeroCarouselMainText = ({ mainText }: CarouselMainText) => {
	return (
		<div>
			{mainText.map((text, idx) => (
				<h2
					key={`car-main-text-${idx}`}
					className={`${idx === 0 ? TEXT_VARIANTS.main : TEXT_VARIANTS.other} `}
				>
					{text}
				</h2>
			))}
		</div>
	)
}
