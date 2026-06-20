import { useCallback, useEffect, useRef, useState } from 'react'

import {
	BASE_HOVER_STATE,
	BASE_OVERFLOW_STATES,
	HEADER_HEIGHT
} from './constants/constants'

//TODO: add position checking for overflows - REWRITE

export const usePopover = (timeoutTime = 100) => {
	const [hoverState, setHoverState] = useState(BASE_HOVER_STATE)
	const [overflowStates, setOverflowStates] = useState(BASE_OVERFLOW_STATES)

	const ref = useRef<HTMLDivElement | null>(null)
	const timeout = useRef<NodeJS.Timeout>(undefined)

	const updateOverflowState = useCallback(
		(entry?: Element | HTMLDivElement | null) => {
			if (!entry) return

			const { innerHeight } = window
			const { top, bottom } = entry.getBoundingClientRect()

			const topOverflow = top < HEADER_HEIGHT
			const bottomOverflow = bottom > innerHeight

			if (topOverflow === overflowStates.top && bottomOverflow === overflowStates.bottom) {
				return
			}

			if (topOverflow) {
				setOverflowStates((prev) => {
					return { ...prev, top: topOverflow }
				})
			}
			if (bottomOverflow) {
				setOverflowStates((prev) => {
					return { ...prev, bottom: bottomOverflow }
				})
			}
		},
		[overflowStates.top, overflowStates.bottom]
	)

	useEffect(() => {
		return () => clearTimeout(timeout.current)
	}, [timeout])

	useEffect(() => {
		if (!hoverState.mouseCaptured || !ref?.current) return

		const handlePositionUpdate = () => {
			updateOverflowState(ref.current)
		}

		window.addEventListener('scroll', handlePositionUpdate)

		return () => {
			window.removeEventListener('scroll', handlePositionUpdate)
		}
	}, [hoverState.mouseCaptured, updateOverflowState])

	const onPointerEnter = () => {
		if (!hoverState.isHovered) {
			clearTimeout(timeout.current)
			setHoverState((prev) => {
				return { ...prev, mouseCaptured: true }
			})

			timeout.current = setTimeout(
				() =>
					setHoverState((prev) => {
						return { ...prev, isHovered: true }
					}),
				50
			)
		}
	}

	const onPointerLeave = () => {
		setHoverState((prev) => {
			return { ...prev, isHovered: false }
		})

		timeout.current = setTimeout(() => {
			setHoverState((prev) => {
				return { ...prev, mouseCaptured: false }
			})
			setOverflowStates(() => BASE_OVERFLOW_STATES)
		}, timeoutTime)
	}

	return {
		hoverState,
		overflowStates,
		handlePopover: { onPointerEnter, onPointerLeave },
		popoverRef: ref
	}
}
