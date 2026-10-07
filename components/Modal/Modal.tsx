'use client'

import type { RefObject } from 'react'

type ModalClassNames = 'default' | 'music' | 'blogPost'

const ModalClassNames: { [K in ModalClassNames]: string } = {
	default:
		'modal fixed -translate-1/2 top-1/2 left-1/2 w-9/10 h-9/10 m-0 p-1 border-0 max-w-none max-h-none',
	music:
		'backdrop:bg-transparent open:backdrop:bg-black/75 open:backdrop-blur-xl brightness-125 top-1/2 left-1/2 -translate-1/2 bg-transparent',
	blogPost:
		'fixed opacity-25 scale-y-0 open:scale-y-100 open:opacity-100 backdrop:bg-transparent open:backdrop:bg-black/25 open:backdrop-blur-xl brightness-125 top-1/2 left-1/2 -translate-1/2 rounded-lg'
}

type ModalProps = React.PropsWithChildren & {
	ref: RefObject<HTMLDialogElement | null>
	modalClass?: ModalClassNames
	onPointerDown?: (e: React.PointerEvent<HTMLDialogElement>) => void
}

export const Modal = ({
	children,
	ref,
	onPointerDown,
	modalClass = 'default'
}: ModalProps) => {
	const selectedModalClass = ModalClassNames[modalClass]

	return (
		<dialog
			closedby="closerequest"
			onPointerDown={onPointerDown}
			className={`${ModalClassNames.default} ${selectedModalClass}`}
			ref={ref}
		>
			{children}
		</dialog>
	)
}
