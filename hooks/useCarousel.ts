import { useCallback, useEffect, useRef, useState } from 'react'

export const useCarousel = (
	length: number,
	forwardTimeout: number,
	intervalTimeout: number
) => {
	const [idx, setIdx] = useState(0)
	const [nextIdx, setNextIdx] = useState(0)
	const [loaded, setLoaded] = useState(false)

	const timeoutRef = useRef<NodeJS.Timeout | null>(null)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	const clearTimeouts = useCallback(() => {
		if (intervalRef.current !== null) {
			clearInterval(intervalRef.current)
			intervalRef.current = null
		}
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}
	}, [])

	const moveSlideForward = useCallback(() => {
		intervalRef.current = setInterval(() => {
			setLoaded(false)
			setNextIdx((prev) => (prev + 1) % length)

			timeoutRef.current = setTimeout(() => {
				setIdx((prev) => (prev + 1) % length)
			}, forwardTimeout)
		}, intervalTimeout)
	}, [forwardTimeout, intervalTimeout, length])

	const selectNextSlide = useCallback(() => {
		clearTimeouts()
		moveSlideForward()
	}, [clearTimeouts, moveSlideForward])

	const changeCurrentSlide = useCallback(
		(newIdx: number) => {
			if (idx === newIdx) return

			clearTimeouts()

			setLoaded(false)
			setNextIdx(newIdx)

			timeoutRef.current = setTimeout(() => {
				setIdx(newIdx)

				moveSlideForward()
			}, forwardTimeout)
		},
		[clearTimeouts, forwardTimeout, idx, moveSlideForward]
	)

	useEffect(() => {
		moveSlideForward()

		return () => clearTimeouts()
	}, [moveSlideForward, clearTimeouts])

	return {
		idx,
		nextIdx,
		loaded,
		setLoaded,
		moveSlideForward,
		selectNextSlide,
		changeCurrentSlide
	}
}
