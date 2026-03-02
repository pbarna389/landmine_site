import type { HeightValuesType, WidthValuesType } from '@/types'

type PentagonPropsType = {
	height: HeightValuesType
	width: WidthValuesType
}

export const Pentagon = ({ width, height }: PentagonPropsType) => {
	return (
		<div
			className={`absolute transform -translate-y-1/2 top-0 left-0 ${width} ${height} clip-pentagon bg-cube-secondary`}
		/>
	)
}
