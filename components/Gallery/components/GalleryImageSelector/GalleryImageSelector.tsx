'use client'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type GalleryImageSelectorProps = {
	images: {
		alt: string
		src: StaticImageData
	}[]
	selectedIdx: number
	setSelectedIdx: React.Dispatch<React.SetStateAction<number>>
}

export const GalleryImageSelector = ({
	images,
	selectedIdx,
	setSelectedIdx
}: GalleryImageSelectorProps) => {
	const handleClick = (idx: number) => {
		setSelectedIdx(idx)
	}

	return (
		<div className="flex flex-row flex-nowrap gap-20">
			{images.map((image, idx) => (
				<button
					aria-label={`Galéria kép kiválasztása: ${image.alt}`}
					className={`w-30 h-20 relative transition-all duration-200 border-4  rounded-sm hover:scale-110 hover:brightness-110 ${selectedIdx === idx ? 'border-amber-400 scale-105' : 'border-transparent'}`}
					key={`gallery-image-selector-image-${image.alt}`}
					onClick={() => handleClick(idx)}
				>
					<Image src={image.src.src} alt={image.alt} fill />
				</button>
			))}
		</div>
	)
}
