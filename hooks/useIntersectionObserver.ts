import { useEffect, useRef, useState } from 'react'

type UseIntersectionObserverProps = {
	callback?: () => Promise<void>
	shouldFreeze?: boolean
}

export const useIntersectionObserver = ({
	shouldFreeze = false,
	callback
}: UseIntersectionObserverProps) => {
	const [inView, setInView] = useState<boolean>(false)

	const frozen = shouldFreeze && inView

	const ref = useRef(null)

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
			rootMargin: '0px 0px 100px 0px'
		})

		if (current) {
			observer.observe(current)
		}

		return () => observer.disconnect()
	}, [callback, frozen])

	return { ref, inView }
}
