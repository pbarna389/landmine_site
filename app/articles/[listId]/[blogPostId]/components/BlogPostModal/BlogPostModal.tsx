'use client'

import { useEffect } from 'react'

import { Modal } from '@/components'
import { useModal } from '@/hooks/useModal'

export const BlogPostModal = ({ children }: React.PropsWithChildren) => {
	const { ref, setIsOpen } = useModal()

	useEffect(() => {
		const dialog = ref.current

		if (!dialog) {
			return
		}

		if (!dialog.open) {
			console.log('DIALOGUE OPEN RUNS')
			dialog.showModal()
			setIsOpen(true)
		}

		return () => {
			if (dialog.open) {
				dialog.close()
			}
		}
	}, [ref, setIsOpen])

	return <Modal ref={ref}>{children}</Modal>
}
