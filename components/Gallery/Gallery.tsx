'use client'

// TODO: finish the logic

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { useState } from 'react'

import { GalleryButton, GalleryImageSelector } from './components'

type GalleryProps = {
	images: {
		alt: string
		src: StaticImageData
	}[]
}

export const Gallery = ({ images }: GalleryProps) => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0)

	const handleIdxUpdate = (type: 'forward' | 'backward') => {
		switch (type) {
			case 'forward': {
				setSelectedIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))

				return
			}
			case 'backward': {
				setSelectedIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))

				return
			}
			default: {
				const _exhaustedCheck: never = type

				return _exhaustedCheck
			}
		}
	}

	return (
		<div className="w-full relative flex flex-col gap-20 items-center justify-center p-5 bg-emerald-500">
			<GalleryButton setSelectedIdx={handleIdxUpdate} type="forward" />
			<GalleryButton setSelectedIdx={handleIdxUpdate} type="backward" />
			<div className="relative w-62.5 h-62.5">
				<Image src={images[selectedIdx].src.src} alt={images[selectedIdx].alt} fill />
			</div>
			<GalleryImageSelector
				images={images}
				setSelectedIdx={setSelectedIdx}
				selectedIdx={selectedIdx}
			/>
		</div>
	)
}
