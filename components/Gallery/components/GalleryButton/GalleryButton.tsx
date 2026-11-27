'use client'

import { Icons } from '@/components/Icons'

type GalleryButtonProps = {
	setSelectedIdx: (type: 'forward' | 'backward') => void
	type: 'forward' | 'backward'
}

export const GalleryButton = ({ type, setSelectedIdx }: GalleryButtonProps) => {
	const selectedBehavior = type === 'forward' ? 'chevronRight' : 'chevronLeft'
	const classNames = type === 'forward' ? 'right-5' : 'left-5'

	return (
		<button
			className={`w-fit absolute cursor-pointer *:transition *:duration-200 *:fill-white hover:*:fill-amber-400 hover:*:scale-120 ${classNames}`}
			type="button"
			aria-label={`Galéria mozgatása: ${type === 'forward' ? 'előre' : 'hátra'} `}
			onClick={() => setSelectedIdx(type)}
		>
			<Icons iconVars={selectedBehavior} />
		</button>
	)
}
