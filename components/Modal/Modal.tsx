'use client'

import type { RefObject } from 'react'

type ModalClassNames = 'default' | 'music'

const ModalClassNames: { [K in ModalClassNames]: string } = {
	default:
		'modal fixed opacity-0 open:opacity-100 transition-opacity w-screen h-screen m-0 p-1 border-0 max-w-none max-h-none',
	music:
		'backdrop:bg-transparent open:backdrop:bg-black/75 open:backdrop-blur-xl brightness-125 top-1/2 left-1/2 -translate-1/2 bg-transparent'
}

type ModalProps = React.PropsWithChildren & {
	modalClass: Exclude<ModalClassNames, 'default'>
	ref: RefObject<HTMLDialogElement | null>
}

export const Modal = ({ children, ref, modalClass }: ModalProps) => {
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
