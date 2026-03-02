type CubeProps = {
	className?: string
	color?: string
}

export const Cube = ({ className = '', color = 'section-body' }: CubeProps) => {
	return (
		<div
			className={`w-7 h-7 md:w-12 md:h-12 lg:w-17 lg:h-17 transform -rotate-45 bg-cube-secondary bg-${color} ${className}`}
		/>
	)
}
