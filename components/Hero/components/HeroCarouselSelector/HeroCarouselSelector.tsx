type HeroCarouselSelectorProps = {
	callback: (idx: number) => void
	carouselTimer: number
	idx: number
	length: number
	loaded: boolean
	nextIdx: number
}

export const HeroCarouselSelector = ({
	idx,
	nextIdx,
	length,
	loaded,
	carouselTimer,
	callback
}: HeroCarouselSelectorProps) => {
	const mockArray = Array.from({ length }, (_: number, arrIdx: number) => {
		return { id: `selector-${arrIdx}` }
	})

	return (
		<div className="absolute z-1 bottom-5 -translate-x-1/2 left-1/2 flex items-center justify-center gap-10">
			{mockArray.map((element, cardIdx) => (
				<button
					type="button"
					aria-current={idx === cardIdx ? 'true' : undefined}
					aria-label={`Ugrás a ${cardIdx + 1} elemre`}
					key={`selector-id-${element.id}`}
					style={
						{
							'--carousel-timer': `${carouselTimer}ms`
						} as React.CSSProperties
					}
					className={`h-5 w-5 rounded-full overflow-hidden opacity-80 bg-white cursor-pointer relative transition-all duration-250 hover:opacity-100 hover:brightness-115 hover:scale-115  after:absolute after:bottom-0  after:origin-bottom after:left-0 after:z-2 after:bg-carousel/75 after:transition-all after:content-[''] after:w-full after:h-full after:duration-750 after:scale-y-0 ${idx === cardIdx && loaded ? `after:[transition-duration:var(--carousel-timer)] after:scale-y-100` : ''} ${nextIdx === cardIdx ? 'brightness-90 opacity-100 scale-125 hover:scale-130' : ''}`}
					onClick={() => callback(cardIdx)}
				/>
			))}
		</div>
	)
}
