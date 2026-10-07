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
		<Modal ref={ref} modalClass="blogPost" onPointerDown={pointerEvent}>
			{children}
			<button
				className="text-black border border-black cursor-pointer"
				type="button"
				onClick={modalClose}
			>
				Close
			</button>
		</Modal>
	)
}
