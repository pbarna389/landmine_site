type PopoverProps = {
	isHovered: boolean
	mouseCaptured: boolean
	text: string
}

export const Popover = ({ text, isHovered, mouseCaptured }: PopoverProps) => {
	return (
		<div
			className={`absolute normal-case z-2 opacity-0 -bottom-0.5 -left-0.5 w-[25vw] border-2 border-gray-400 rounded-md bg-hover transition-opacity duration-300 text-white text-start pb-11 p-5 ${isHovered && mouseCaptured ? 'opacity-100' : ''}`}
		>
			{text}
		</div>
	)
}
