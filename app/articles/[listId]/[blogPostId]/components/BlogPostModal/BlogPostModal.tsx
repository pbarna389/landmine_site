'use client'

import { useCallback, useEffect } from 'react'

import { Modal } from '@/components'
import { useModal } from '@/hooks/useModal'

export const BlogPostModal = ({ children }: React.PropsWithChildren) => {
	const {
		ref,
		setIsOpen,
		handleModalClick: modalClose
	} = useModal({ shouldTravelBack: true })

	useEffect(() => {
		const dialog = ref.current

		if (!dialog) {
			return
		}

		if (!dialog.open) {
			dialog.showModal()
			setIsOpen(true)
		}

		return () => {
			if (dialog.open) {
				dialog.close()
			}
		}
	}, [ref, setIsOpen])

	const pointerEvent = useCallback(
		(e: React.PointerEvent<HTMLDialogElement>) => {
			const { clientX, clientY } = e

			const dialog = e.currentTarget
			const rect = dialog.getBoundingClientRect()

			const clickedBackdrop =
				clientX < rect.left ||
				clientX > rect.right ||
				clientY < rect.top ||
				clientY > rect.bottom

			if (clickedBackdrop) {
				modalClose()
			}
		},
		[modalClose]
	)

	return (
		<>
			<Modal ref={ref} modalClass="blogPost" onPointerDown={pointerEvent}>
				<button
					aria-label="close article"
					className="fixed z-2 top-2.5 right-5 w-10 h-10 cursor-pointer before:fixed before:w-10 before:rotate-45 before:bg-carousel before:h-1 before:top-7 before:right-5 before:transition-['scale'] before:scale-75 hover:before:scale-100 after:fixed after:w-10 after:-rotate-45 after:bg-carousel after:h-1 after:top-7 after:right-5 after:transition-['scale'] after:scale-75 hover:after:scale-100"
					type="button"
					onClick={modalClose}
				/>
				<div className="h-full min-h-0 overflow-y-auto">{children}</div>
			</Modal>
		</>
	)
}
