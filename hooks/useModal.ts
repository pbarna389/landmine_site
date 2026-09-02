import { useEffect, useRef, useState } from 'react'

import { useBreakpointChecker } from './useBreakpointChecker'
import { useDisableScrolling } from './useDisableScrolling'

export function useModal() {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isMobile = useBreakpointChecker()
	const ref = useRef<HTMLDialogElement>(null)

	useDisableScrolling(isOpen)

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
		ref,
		isOpen,
		isMobile,
		handleModalClick,
		setIsOpen
	}
}
