export const POSITION_VARIANTS = {
	top: {
		start:
			'opacity-0 top-[15%] left-1/2 md:top-[20%] md:left-1/2 2xl:top-[29.6%] 2xl:left-1/2',
		end: 'opacity-100 top-[25%] left-1/2 md:top-[20%] md:left-13/200 2xl:top-[29.6%] 2xl:left-3/25',
		duration: 'duration-1000'
	},
	middle: {
		start:
			'opacity-0 top-[55%] left-1/2 md:top-[38%] md:left-1/2 2xl:top-[45%] 2xl:left-1/2',
		end: 'opacity-100 top-[40%] left-1/2 md:top-[38%] md:left-13/200 2xl:top-[45%] 2xl:left-3/25',
		duration: 'duration-1300'
	},
	end: {
		start: 'opacity-0 top-1/2 left-1/2 2xl:top-[67.5%] 2xl:left-1/2',
		end: 'opacity-100 top-9/20 left-1/2 2xl:top-[67.5%] 2xl:left-3/25',
		duration: 'duration-1600'
	}
}

export const TEXT_VARIANTS = {
	main: 'font-white',
	other: 'text-hero-highlight'
}
