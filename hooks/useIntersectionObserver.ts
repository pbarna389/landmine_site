import type { RefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

type UseIntersectionObserverProps = {
	callback?: () => void
	shouldFreeze?: boolean
}

export const useIntersectionObserver = ({
	shouldFreeze = false,
	callback
}: UseIntersectionObserverProps) => {
	const [inView, setInView] = useState<boolean>(false)

	const frozen = shouldFreeze && inView

	const ref: RefObject<HTMLDivElement | null> = useRef(null)

	useEffect(() => {
		if (!ref || !(`IntersectionObserver` in window) || frozen) return

		const observerCb = (entries: IntersectionObserverEntry[]) => {
			const [{ isIntersecting }] = entries

			if (isIntersecting && callback) {
				callback()
			}

			setInView(isIntersecting)
		}

		const { current } = ref

		const observer = new IntersectionObserver(observerCb, {
			rootMargin: '-50% 0px -50% 0px'
		})

		if (current) {
			observer.observe(current)
		}

		return () => observer.disconnect()
	}, [callback, frozen])

	return { ref, inView }
}
