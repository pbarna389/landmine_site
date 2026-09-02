'use client'

import { useEffect, useEffectEvent } from 'react'

import { Button, Modal, Popover } from '@/components'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'
import { useModal } from '@/hooks/useModal'
import { usePopover } from '@/hooks/usePopover'

type AlbumStoryProp = {
	details: string
	text: string
}

export const AlbumStory = ({ details, text }: AlbumStoryProp) => {
	const { ref, isOpen, setIsOpen } = useModal()
	const isMobile = useBreakpointChecker()

	const setOpenFalse = useEffectEvent(() => {
		setIsOpen(false)
	})

	useEffect(() => {
		if (!isMobile) {
			setOpenFalse()
		}
	}, [isMobile])

	const {
		overflowStates,
		hoverState: { isHovered, mouseCaptured },
		handlePopover: { onPointerEnter, onPointerLeave },
		anchorRef
	} = usePopover(200)

	const handleModalClick = () => {
		if (!isMobile || !ref.current) return

		if (!isOpen) {
			ref.current.showModal()
		} else {
			ref.current.close()
		}

		setIsOpen((prev) => !prev)
	}

	return (
		<div
			ref={anchorRef}
			className={`relative`}
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
		>
			<Button
				className="p-3 pl-4.5 pr-4.5 w-full h-full z-5 bg-transparent cursor-default hover:border-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white target:bg-black target:text-white focus-visible:bg-black focus-visible:text-white"
				onClick={handleModalClick}
			>
				{!isMobile && mouseCaptured && (
					<Popover
						text={details}
						overflowStates={overflowStates}
						isHovered={isHovered}
						mouseCaptured={mouseCaptured}
					/>
				)}
				{isMobile && (
					<Modal ref={ref}>
						<article
							className={`grid place-items-center cursor-default normal-case z-2 -left-px p-5 w-full h-full border-2 border-gray-400 rounded-md text-white text-start overflow-y-scroll overscroll-none scrollbar-thin scrollbar-gutter-both scrollbar-track-transparent scrollbar-thumb-gray-400`}
						>
							{details}
						</article>
					</Modal>
				)}
				<span className="relative z-2">{text}</span>
			</Button>
		</div>
	)
}
