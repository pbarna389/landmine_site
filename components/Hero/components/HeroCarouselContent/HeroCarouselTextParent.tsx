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
			className={`absolute z-5 text-[clamp(39px,15vw,65px)] leading-[clamp(39px,15vw,65px)] w-full text-center font-montserrat font-bold transition-all ${elementPos.duration} transform -translate-1/2 sm:leading-13 sm:text-[56px] md:w-fit md:text-[60px] 2xl:text-[68px] md:translate-0 md:text-left ${loadState ? elementPos.end : elementPos.start}`}
		>
			{children}
		</div>
	)
}
