type overflowStates = 'top' | 'bottom' | 'left' | 'right'

type PopoverProps = {
	isHovered: boolean
	mouseCaptured: boolean
	overflowStates: {
		[key in overflowStates]: boolean
	}
	popoverRef: React.RefObject<HTMLDivElement | null>
	text: string
}

export const Popover = ({
	text,
	isHovered,
	mouseCaptured,
	overflowStates,
	popoverRef
}: PopoverProps) => {
	const { top: topOverflow, bottom: bottomOverflow } = overflowStates

	const onlyTopOverflow =
		topOverflow && !bottomOverflow ? 'top-0 pt-11 p-5' : '-bottom-0.5 pb-11 p-5'

	const onlyBottomOverflow = bottomOverflow && !topOverflow ? '-bottom-0.5 pb-11 p-5' : ''

	return (
		<div
			ref={popoverRef}
			className={`absolute cursor-pointer normal-case z-2 -left-0.5 w-[25vw] border-2 border-gray-400 rounded-md bg-hover  text-white text-start  ${mouseCaptured ? 'block' : 'hidden'} ${isHovered ? 'opacity-100' : 'opacity-0'} ${onlyTopOverflow} ${onlyBottomOverflow}}`}
		>
			{text}
		</div>
	)
}
