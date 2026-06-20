import { useEffect, useRef, useState } from 'react'

type UseIntersectionObserverProps = {
	callback?: (args?: Element) => Promise<void> | void
	rootMargin?: {
		rootMargin: `${number}px ${number}px ${number}px ${number}px`
	}
	shouldFreeze?: boolean
	shouldFreezeInView?: boolean
}

const ROOT_MARGIN_BASE: {
	rootMargin: `${number}px ${number}px ${number}px ${number}px`
} = {
	rootMargin: '0px 0px 100px 0px'
}

export const useIntersectionObserver = ({
	shouldFreeze = false,
	shouldFreezeInView = true,
	rootMargin = ROOT_MARGIN_BASE,
	callback
}: UseIntersectionObserverProps) => {
	const [inView, setInView] = useState<boolean>(false)

	const frozen = shouldFreezeInView ? shouldFreeze && inView : shouldFreeze

	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!ref || !(`IntersectionObserver` in window) || frozen) return

		const observerCb = (entries: IntersectionObserverEntry[]) => {
			const [{ isIntersecting, target }] = entries

			if (isIntersecting && callback) {
				callback(target)
			}

			setInView(isIntersecting)
		}

		const { current } = ref

		const observer = new IntersectionObserver(observerCb, rootMargin)

		if (current) {
			observer.observe(current)
		}

		return () => observer.disconnect()
	}, [callback, frozen, inView, rootMargin])

	return { ref, inView }
}
