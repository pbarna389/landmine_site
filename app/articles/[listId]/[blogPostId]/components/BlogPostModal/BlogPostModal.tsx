'use client'

import { useEffect } from 'react'

import { Modal } from '@/components'
import { useModal } from '@/hooks/useModal'

export const BlogPostModal = ({ children }: React.PropsWithChildren) => {
	const { ref, setIsOpen, handleModalClick } = useModal(true)

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

	return (
		<Modal ref={ref}>
			{children}
			<button
				className="text-black border border-black cursor-pointer"
				type="button"
				onClick={handleModalClick}
			>
				Close
			</button>
		</Modal>
	)
}
