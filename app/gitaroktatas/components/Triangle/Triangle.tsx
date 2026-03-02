import type { HeightValuesType, WidthValuesType } from '@/types'

type TriangleProps = {
	height: HeightValuesType
	width: WidthValuesType
	background?: 'bg-section-header-bg' | 'bg-cube-secondary' | 'bg-quote'
	className?: string
	position?: 'top' | 'bottom'
	rotateDeg?: `${number extends number ? number : never}`
}

export const Triangle = ({
	width,
	height,
	background = 'bg-section-header-bg',
	position = 'top',
	className = ''
}: TriangleProps) => {
	return (
		<div
			className={`absolute transform top-0 right-0 ${position === 'top' ? 'clip-top-triangle -translate-y-7' : 'clip-bottom-triangle'} ${background} ${width} ${height} ${className}`}
		/>
	)
}
