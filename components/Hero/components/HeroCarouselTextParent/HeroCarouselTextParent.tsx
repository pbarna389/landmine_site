import { POSITION_VARIANTS } from './constants/constants'

type CarouselTextParentProps = React.PropsWithChildren & {
	loadState: boolean
	position: 'top' | 'middle' | 'end'
}

export const HeroCarouselTextParent = ({
	children,
	loadState,
	position
}: CarouselTextParentProps) => {
	const elementPos = POSITION_VARIANTS[position]

	return (
		<div
			className={`absolute z-5 space-y-10 text-[12vw] text-center font-montserrat font-bold leading-13 transition-all ${elementPos.duration} transform -translate-1/2 sm:text-5xl md:translate-0 md:text-left ${loadState ? elementPos.end : elementPos.start}`}
		>
			{children}
		</div>
	)
}
