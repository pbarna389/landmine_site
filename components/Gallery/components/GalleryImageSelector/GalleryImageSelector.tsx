'use client'

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type GalleryImageSelectorProps = {
	images: {
		alt: string
		src: StaticImageData
	}[]
	selectedIdx: number
	selectExactIdx: (idx: number) => void
}

export const GalleryImageSelector = ({
	images,
	selectedIdx,
	selectExactIdx
}: GalleryImageSelectorProps) => {
	return (
		<div className="flex flex-row flex-nowrap gap-20 select-none">
			{images.map((image, idx) => (
				<button
					aria-label={`Galéria kép kiválasztása: ${image.alt}`}
					aria-pressed={selectedIdx === idx}
					className={`w-30 h-20 relative transition-all cursor-pointer duration-300 border-4 rounded-sm hover:scale-110 hover:brightness-110 ${selectedIdx === idx ? 'border-amber-400 scale-105' : 'border-transparent'}`}
					key={`gallery-image-selector-image-${image.alt}`}
					onClick={() => selectExactIdx(idx)}
				>
					<Image src={image.src.src} alt={image.alt} fill />
				</button>
			))}
		</div>
	)
}
