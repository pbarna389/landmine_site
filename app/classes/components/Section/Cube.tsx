type CubeProps = {
	isLeftSide: boolean
	className?: string
	firstElement?: boolean
}

export const Cube = ({ isLeftSide, className = '', firstElement = true }: CubeProps) => {
	return (
		<div
			className={`absolute transform -rotate-45 -translate-y-1/2 w-7 h-7  md:w-12 md:h-12 lg:w-18.75 lg:h-18.75 ${isLeftSide ? `left-1.5 md:left-2.5 lg:left-4` : `right-1.5 md:right-2.5 lg:right-4`} ${firstElement ? 'bg-zinc-50 top-0' : 'bg-cube-secondary top-10 md:top-17 lg:top-26.75'} ${className}`}
		/>
	)
}
