import { useRouter } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import { useBreakpointChecker } from './useBreakpointChecker'
import { useDisableScrolling } from './useDisableScrolling'

export function useModal(shouldTravelBack = false) {
	const router = useRouter()

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isMobile = useBreakpointChecker()
	const ref = useRef<HTMLDialogElement>(null)

	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

	useDisableScrolling(isOpen)

	useEffect(() => {
		const keyPressCb = (e: KeyboardEvent) => {
			if (!ref.current) return
			if (e.key === 'Escape' || e.key === 'Esc') {
				setIsOpen(false)

				if (shouldTravelBack) {
					if (timeoutRef.current) clearTimeout(timeoutRef.current)

					timeoutRef.current = setTimeout(() => {
						router.back()
					}, 100)
				}
			}
		}

		window.addEventListener('keydown', keyPressCb)

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
			window.removeEventListener('keydown', keyPressCb)
		}
	}, [ref, router, shouldTravelBack])

	const handleModalClick = () => {
		if (!ref.current) return

		if (!isOpen) {
			ref.current.showModal()
		} else {
			ref.current.close()

			if (shouldTravelBack) {
				timeoutRef.current = setTimeout(() => {
					router.back()
				}, 100)
			}
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
