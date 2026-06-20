'use client'

import { Button, Popover } from '@/components'
import { usePopover } from '@/hooks/usePopover'

type AlbumStoryProp = {
	details: string
	text: string
}

export const AlbumStory = ({ details, text }: AlbumStoryProp) => {
	const {
		overflowStates,
		hoverState: { isHovered, mouseCaptured },
		handlePopover: { onPointerEnter, onPointerLeave },
		popoverRef
	} = usePopover(300)

	return (
		<div
			className={`relative`}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
		>
			<Button className="p-3 pl-4.5 pr-4.5 w-full h-full z-5 bg-transparent hover:border-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white target:bg-black target:text-white focus-visible:bg-black focus-visible:text-white">
				<Popover
					text={details}
					overflowStates={overflowStates}
					isHovered={isHovered}
					mouseCaptured={mouseCaptured}
					popoverRef={popoverRef}
				/>
				<span className="relative z-2">{text}</span>
			</Button>
		</div>
	)
}
