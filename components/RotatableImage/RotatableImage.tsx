import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type RotatableImage = {
	alt: string
	src: string | StaticImageData
	className?: string
	rotateLeft?: boolean
}

export const RotatableImage = ({
	src,
	alt,
	className = '',
	rotateLeft = true
}: RotatableImage) => {
	return (
		<Image
			className={`object-cover transition-transform duration-750 ${rotateLeft ? 'group-hover:-rotate-8 group-focus:-rotate-8' : 'group-hover:rotate-8 group-focus:rotate-8'} ${className}`}
			src={src}
			alt={alt}
		/>
	)
}
