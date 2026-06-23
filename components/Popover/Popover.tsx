type overflowStates = 'top' | 'bottom'

type PopoverProps = {
	isHovered: boolean
	mouseCaptured: boolean
	overflowStates: {
		[key in overflowStates]: boolean
	}
	text: string
}

export const Popover = ({ text, isHovered, overflowStates }: PopoverProps) => {
	const { top: topOverflow } = overflowStates

	const basePosition = 'bottom-full'

	const topOverflowPosition = topOverflow ? 'top-full' : ''

	return (
		<div
			className={`absolute cursor-default normal-case z-2 -left-px p-5 w-[25vw] h-37.5  border-2 border-gray-400 rounded-md bg-transparent backdrop-blur-sm text-white transition-discrete duration-200 text-start overflow-y-scroll overscroll-none scrollbar-thin scrollbar-gutter-both scrollbar-track-transparent scrollbar-thumb-gray-400 ${isHovered ? 'opacity-100' : 'opacity-0'} ${basePosition} ${topOverflowPosition}`}
		>
			{text}
		</div>
	)
}
