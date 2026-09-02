import type { RefObject } from 'react'
import { useEffect } from 'react'

export function useOutsideClick<T extends HTMLElement>(
	callback: () => void,
	ref: RefObject<T | null>
) {
	useEffect(() => {
		const handler = (e: PointerEvent) => {
			if (!ref.current) return

			if (!(e.target instanceof Node)) return

			if (!ref.current.contains(e.target)) {
				callback()
			}
		}

		document.addEventListener('pointerdown', handler)

		return () => {
			document.removeEventListener('pointerdown', handler)
		}
	}, [callback, ref])

	return ref
}
