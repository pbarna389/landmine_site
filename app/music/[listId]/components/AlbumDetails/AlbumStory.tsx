'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

import { Popover } from '@/components'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'
import { usePopover } from '@/hooks/usePopover'

type AlbumStoryProp = {
	details: string
	id: string
	text: string
}

export const AlbumStory = ({ details, text, id }: AlbumStoryProp) => {
	const isMobile = useBreakpointChecker()

	const { listId } = useParams<{ listId: string }>()

	const {
		overflowStates,
		hoverState: { isHovered, mouseCaptured },
		handlePopover: { onPointerEnter, onPointerLeave },
		popoverRef
	} = usePopover(200)

	return (
		<div
			ref={popoverRef}
			className={`relative`}
			onPointerEnter={!isMobile ? onPointerEnter : undefined}
			onPointerLeave={!isMobile ? onPointerLeave : undefined}
		>
			<Link
				href={`./${listId}/${id}`}
				className="capitalize cursor-pointer group/button text-[16px] border  border-hover  rounded transition-colors duration-300 hover:bg-hover  p-3 pl-4.5 pr-4.5 w-full h-full z-5 bg-transparent hover:border-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white target:bg-black target:text-white focus-visible:bg-black focus-visible:text-white"
			>
				{!isMobile && mouseCaptured && (
					<Popover
						text={details}
						overflowStates={overflowStates}
						isHovered={isHovered}
						mouseCaptured={mouseCaptured}
					/>
				)}
				<span className="relative z-2">{text}</span>
			</Link>
		</div>
	)
}
