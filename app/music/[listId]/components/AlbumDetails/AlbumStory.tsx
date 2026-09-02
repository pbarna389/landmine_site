'use client'

import { Button, Modal, Popover } from '@/components'
import { useModal } from '@/hooks/useModal'
import { usePopover } from '@/hooks/usePopover'

type AlbumStoryProp = {
	details: string
	text: string
}

export const AlbumStory = ({ details, text }: AlbumStoryProp) => {
	const { ref, handleModalClick, isMobile, setIsOpen } = useModal()

	const {
		overflowStates,
		hoverState: { isHovered, mouseCaptured },
		handlePopover: { onPointerEnter, onPointerLeave },
		popoverRef
	} = usePopover(200)

	const onCloseHandler = () => {
		setIsOpen(false)
	}

	return (
		<div
			ref={popoverRef}
			className={`relative`}
			onPointerEnter={!isMobile ? onPointerEnter : undefined}
			onPointerLeave={!isMobile ? onPointerLeave : undefined}
		>
			<Button
				className="p-3 pl-4.5 pr-4.5 w-full h-full z-5 bg-transparent cursor-default hover:border-black hover:text-white active:bg-black active:text-white focus:bg-black focus:text-white target:bg-black target:text-white focus-visible:bg-black focus-visible:text-white"
				onClick={isMobile ? handleModalClick : undefined}
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
			</Button>
			{isMobile && (
				<Modal ref={ref} modalClass="music" onCloseHandler={onCloseHandler}>
					<article
						className={`grid place-items-center cursor-default normal-case z-2 -left-px p-5 w-full h-full border-2 border-gray-400 rounded-md text-white text-md text-center overflow-y-scroll overscroll-none scrollbar-thin scrollbar-gutter-both scrollbar-track-transparent scrollbar-thumb-gray-400`}
					>
						{details}
					</article>
					<button
						className="absolute top-0 left-0 bg-black text-white"
						onClick={handleModalClick}
					>
						Remove modal
					</button>
				</Modal>
			)}
		</div>
	)
}
