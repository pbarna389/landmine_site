'use client'

import type { RefObject } from 'react'

type ModalProps = React.PropsWithChildren & {
	ref: RefObject<HTMLDialogElement | null>
	className?: string
}

export const Modal = ({ children, ref }: ModalProps) => {
	return (
		<dialog
			popover="auto"
			closedby="any"
			className="modal fixed opacity-0 open:opacity-100 transition-[opacity, transition, display, overlay] duration-200 backdrop:bg-transparent open:backdrop-blur-sm top-1/2 left-1/2 -translate-1/2 bg-transparent w-screen h-screen"
			ref={ref}
		>
			{children}
		</dialog>
	)
}
