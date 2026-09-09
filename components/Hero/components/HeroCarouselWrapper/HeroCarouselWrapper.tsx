type HeroCarouselWrapperProps = React.PropsWithChildren & {
	loadState: boolean
}

export const HeroCarouselWrapper = ({
	children,
	loadState
}: HeroCarouselWrapperProps) => {
	return (
		<div
			className={`w-full h-screen relative z-1 transition-all duration-500 shadow-2xl ${loadState ? 'opacity-100' : 'opacity-0'}`}
		>
			{children}
		</div>
	)
}
