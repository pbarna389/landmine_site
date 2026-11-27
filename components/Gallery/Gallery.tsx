'use client'

// TODO: finish the logic

import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'

import { GalleryButton, GalleryImageSelector } from './components'
import { useBreakpointChecker } from '@/hooks/useBreakpointChecker'

type GalleryProps = {
	images: {
		alt: string
		src: StaticImageData
	}[]
	changeTime?: number
}

export const Gallery = ({ images, changeTime = 500 }: GalleryProps) => {
	const [selectedIdx, setSelectedIdx] = useState<number>(0)
	const [nextIdx, setNextIdx] = useState<number>(0)
	const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	const isMobile = useBreakpointChecker(820)

	useEffect(() => {
		const currentRef = timeoutRef.current

		return () => {
			if (currentRef) clearTimeout(currentRef)
		}
	}, [timeoutRef])

	const handleIdxUpdate = (type: 'forward' | 'backward') => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current)

		const newIdx =
			type === 'forward'
				? (nextIdx + 1) % images.length
				: (nextIdx - 1 + images.length) % images.length

		setNextIdx(newIdx)

		setIsTransitioning(true)

		timeoutRef.current = setTimeout(() => {
			setSelectedIdx(newIdx)
			setIsTransitioning(false)
		}, changeTime)
	}

	const selectExactIdx = (idx: number) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}

		setNextIdx(idx)
		setIsTransitioning(true)

		timeoutRef.current = setTimeout(() => {
			setSelectedIdx(nextIdx)
			setIsTransitioning(false)
		}, changeTime)
	}

	if (!images.length) {
		return <div>Nincsenek megjeleníthető képek</div>
	}

	return (
		<div className="w-full relative flex flex-col gap-20 items-center justify-center p-5">
			<GalleryButton setSelectedIdx={handleIdxUpdate} type="forward" />
			<GalleryButton setSelectedIdx={handleIdxUpdate} type="backward" />
			<div
				className={`relative w-[50vw] h-[50vh] transition duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
			>
				<Image
					className="select-none"
					src={images[selectedIdx].src.src}
					alt={images[selectedIdx].alt}
					fill
				/>
			</div>
			{!isMobile && (
				<GalleryImageSelector
					images={images}
					selectedIdx={nextIdx}
					selectExactIdx={selectExactIdx}
				/>
			)}
		</div>
	)
}
