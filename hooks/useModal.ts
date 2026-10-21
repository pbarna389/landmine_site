import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import { useBreakpointChecker } from './useBreakpointChecker'
import { useDisableScrolling } from './useDisableScrolling'

const timeoutTime = 400

export function useModal({ shouldTravelBack = false }: { shouldTravelBack?: boolean }) {
	const router = useRouter()
	const pathName = usePathname()

	const currentPath = pathName.split('/').slice(1)
	currentPath.pop()
	const prevPath = currentPath.join('/')

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const isMobile = useBreakpointChecker()
	const ref = useRef<HTMLDialogElement>(null)

	const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

	useDisableScrolling(isOpen)

	useEffect(() => {
		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current)
		}
	}, [])

	const onCloseComplete = () => {
		if (ref.current?.open || !ref.current) return

		setIsOpen(false)
		if (timeoutRef.current) clearTimeout(timeoutRef.current)

		if (shouldTravelBack) {
			timeoutRef.current = setTimeout(() => {
				router.replace(`/${prevPath}`)
			}, timeoutTime)
		}
	}

	const handleModalStatus = () => {
		if (!ref.current) return

		if (!isOpen) {
			ref.current.showModal()
			setIsOpen(true)
		} else {
			ref.current.close()
		}
	}

	return {
		ref,
		isOpen,
		isMobile,
		handleModalStatus,
		onCloseComplete,
		setIsOpen,
		modalRouter: router
	}
}
