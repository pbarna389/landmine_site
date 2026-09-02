import { useEffect, useRef, useState } from 'react'

import { useDisableScrolling } from './useDisableScrolling'
import { useOutsideClick } from './useOutsideClick'

export function useModal() {
	const ref = useRef<HTMLDialogElement>(null)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	useDisableScrolling(isOpen === null ? false : isOpen)

	useEffect(() => {
		const keyPressCb = (e: KeyboardEvent) => {
			if (!ref.current) return
			if (e.key === 'Escape' || e.key === 'Esc') {
				setIsOpen(false)
			}
		}

		window.addEventListener('keydown', keyPressCb)

		return () => {
			window.removeEventListener('keydown', keyPressCb)
		}
	}, [ref, isOpen])

	const modalRef = useOutsideClick<HTMLDialogElement>(() => {
		setIsOpen(false)
		ref.current?.close()
	}, ref)

	return {
		ref: modalRef,
		isOpen,
		setIsOpen
	}
}
