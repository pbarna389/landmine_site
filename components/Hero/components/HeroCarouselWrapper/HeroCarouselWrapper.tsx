type HeroCarouselWrapperProps = React.PropsWithChildren & {
	loadState: boolean
}

export const HeroCarouselWrapper = ({ children }: HeroCarouselWrapperProps) => {
	return (
		<div className={`w-full h-screen relative z-1 transition-all duration-500 shadow-2xl`}>
			{children}
		</div>
	)
}
