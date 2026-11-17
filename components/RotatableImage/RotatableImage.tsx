import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type RotatableImage = {
	alt: string
	src: string | StaticImageData
	className?: string
	rotateLeft?: boolean
}

//  lg:group-hover:rotate-0 lg:group-focus:rotate-0 xl:group-hover:-rotate-8 xl:group-focus:-rotate-8

export const RotatableImage = ({
	src,
	alt,
	className = '',
	rotateLeft = true
}: RotatableImage) => {
	return (
		<Image
			className={`object-cover transition-transform duration-750 ${rotateLeft ? 'xl:group-hover:-rotate-8 xl:group-focus:-rotate-8' : 'xl:group-hover:rotate-8 xl:group-focus:rotate-8'} ${className}`}
			src={src}
			alt={alt}
		/>
	)
}
