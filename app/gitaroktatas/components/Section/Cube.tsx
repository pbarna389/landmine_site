type CubeProps = {
	className?: string
	firstElement?: boolean
}

export const Cube = ({ className = '', firstElement = true }: CubeProps) => {
	return (
		<div
			className={`w-7 h-7 md:w-12 md:h-12 lg:w-17 lg:h-17 transform -rotate-45 ${firstElement ? 'bg-white' : 'bg-cube-secondary'} ${className}`}
		/>
	)
}
