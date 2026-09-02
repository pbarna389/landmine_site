import { useEffect, useRef, useState } from 'react'

import { useDisableScrolling } from './useDisableScrolling'

export function useModal() {
	const modalRef = useRef<HTMLDialogElement>(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScrolling(isOpen === null ? false : isOpen)

	useEffect(() => {
		const keyPressCb = (e: KeyboardEvent) => {
			if (!modalRef.current) return
			if (e.key === 'Escape' || e.key === 'Esc') {
				setIsOpen(false)
			}
		}

		window.addEventListener('keydown', keyPressCb)

		return () => {
			window.removeEventListener('keydown', keyPressCb)
		}
	}, [modalRef, isOpen])

	return {
		ref: modalRef,
		isOpen,
		setIsOpen
	}
}
