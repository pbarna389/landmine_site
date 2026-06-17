import { useEffect, useRef, useState } from 'react'

//TODO: add position checking for overflows

export const usePopover = (timeoutTime = 100) => {
	const [hoverState, setHoverState] = useState({
		mouseCaptured: false,
		isHovered: false
	})

	const timeout = useRef<NodeJS.Timeout>(undefined)

	useEffect(() => {
		return () => clearTimeout(timeoutTime)
	})

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
		}, timeoutTime)
	}

	return { hoverState, handlePopover: { onPointerEnter, onPointerLeave } }
}
