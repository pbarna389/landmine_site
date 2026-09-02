import { useEffect, useRef, useState } from 'react'

import { useBreakpointChecker } from './useBreakpointChecker'
import { useDisableScrolling } from './useDisableScrolling'
import { useOutsideClick } from './useOutsideClick'

export function useModal() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isMobile = useBreakpointChecker()
	const ref = useRef<HTMLDialogElement>(null)

	useDisableScrolling(isOpen)

	useEffect(() => {
		if (!isMobile && ref.current?.open) {
			ref.current.close()
		}
	}, [isMobile])

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

	const handleModalClick = () => {
		if (!ref.current) return

		if (!isOpen) {
			ref.current.showModal()
		} else {
			ref.current.close()
		}

		setIsOpen((prev) => !prev)
	}

	return {
		ref: modalRef,
		isOpen,
		isMobile,
		handleModalClick,
		setIsOpen
	}
}
