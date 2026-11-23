import { TEXT_VARIANTS } from './constants/constants'

type CarouselMainText = {
	mainText: string[]
}

export const HeroCarouselMainText = ({ mainText }: CarouselMainText) => {
	return (
		<div className="flex flex-col sm:gap-2 md:gap-5 2xl:gap-8">
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
