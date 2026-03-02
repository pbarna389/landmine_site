import { useEffect } from 'react'

export const useDisableScrolling = (shouldDisable: boolean) => {
	useEffect(() => {
		if (!shouldDisable) return

		const originalOverflow = document.body.style.overflow
			? document.body.style.overflow
			: 'auto'

		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = originalOverflow
		}
	}, [shouldDisable])

	return null
}
