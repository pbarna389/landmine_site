import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useRef, useState } from 'react'

import { useBreakpointChecker } from './useBreakpointChecker'
import { useDisableScrolling } from './useDisableScrolling'

// TODO: Handle the back-navigation scrolling by adding the #
// TODO: Find a solution for firefox to handle the closing animations

const timeoutTime = 400

export function useModal({ shouldTravelBack = false }: { shouldTravelBack?: boolean }) {
	const router = useRouter()
	const pathName = usePathname()

	const currentPath = pathName.split('/').slice(1)

	const lastElement = currentPath.pop()

	const prevPath = currentPath.join('/')

	console.log(prevPath)
	console.log(lastElement)

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

		if (timeoutRef.current) clearTimeout(timeoutRef.current)

		setIsOpen(false)

		if (shouldTravelBack) {
			timeoutRef.current = setTimeout(() => {
				router.replace(`/${prevPath}#${lastElement}`)
			}, timeoutTime)
		}
	}

	const handleModalStatus = () => {
		if (!ref.current) return

		if (!isOpen) {
			setIsOpen(true)
			ref.current.showModal()
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
