'use client'

import type { RefObject } from 'react'

type ModalClassNames = 'default' | 'music' | 'blogPost'

const ModalClassNames: { [K in ModalClassNames]: string } = {
	default:
		'modal fixed opacity-0 open:opacity-100 transition-opacity -translate-1/2 top-1/2 left-1/2 w-9/10 h-9/10 m-0 p-1 border-0 max-w-none max-h-none',
	music:
		'backdrop:bg-transparent open:backdrop:bg-black/75 open:backdrop-blur-xl brightness-125 top-1/2 left-1/2 -translate-1/2 bg-transparent',
	blogPost:
		'modal fixed opacity-0 open:opacity-100 transition-opacity -translate-1/2 top-1/2 left-1/2 w-9/10 h-9/10 m-0 p-1 border-0 max-w-none max-h-none'
}

type ModalProps = React.PropsWithChildren & {
	ref: RefObject<HTMLDialogElement | null>
	modalClass?: ModalClassNames
}

export const Modal = ({ children, ref, modalClass = 'default' }: ModalProps) => {
	const selectedModalClass = ModalClassNames[modalClass]

	return (
		<dialog
			closedby="closerequest"
			className={`${ModalClassNames.default} ${selectedModalClass}`}
			ref={ref}
		>
			{children}
		</dialog>
	)
}
