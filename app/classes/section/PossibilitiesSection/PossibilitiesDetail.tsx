import Link from 'next/link'

import { Button } from '@/components'
import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import type { PossibilitiesDetailsType } from './constants/constants'
import type { ArrayElementType } from '@/types'

// TODO: Update the main layout to resemble the original design more

type PossibilitiesDetailProps = {
	content: ArrayElementType<PossibilitiesDetailsType>
	idx: number
}
export const PossibilitiesDetail = ({
	content: { title, subTitle, image, text, link },
	idx
}: PossibilitiesDetailProps) => {
	const isEvenElement = idx % 2 === 0

	return (
		<div className={`w-full flex ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
			<div
				className={`w-full flex ${isEvenElement ? 'flex-col' : 'flex-col-reverse'} gap-[5%] justify-start items-start p-[3%] bg-section-detail rounded relative ${isEvenElement ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-[5%] lg:p-[3.75%] ${isEvenElement ? 'ml-48 lg:pt-16.25' : 'pt-8 mr-48'}`}
			>
				<div className="basis-1/2">
					{title && (
						<h3
							className={`possibilities-heading-text capitalize min-w-fit max-w-2/6 text-center p-3 border border-black sm:absolute sm:-top-3 sm:left-8 ${isEvenElement ? 'text-start' : 'text-end'}`}
						>
							{title}
						</h3>
					)}
					<div className={`${isEvenElement ? 'mt-3' : 'mt-0'} sm:mt-5 relative group`}>
						<RotatableImage
							src={image.src}
							alt={image.alt}
							rotateLeft={isEvenElement ? false : true}
							className={'w-full rounded-lg'}
						/>
						<p
							className={`block w-1/3 mt-1 text-main capitalize italic ${isEvenElement ? 'text-start' : 'text-end'} z-0 opacity-100 cursor-default select-none lg:absolute lg:-bottom-7.5 lg:mt-0 lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 text-sm lg:opacity-0 lg:${isEvenElement ? 'left-0' : 'right-0 text-right'}`}
						>
							{image.caption}
						</p>
					</div>
				</div>
				<div className="basis-1/2 text-justify space-y-7.5">
					<h4 className="classes-heading-text uppercase text-start text-nowrap">
						{subTitle.text} <span>{subTitle.emoticon}</span>
					</h4>
					<p className="whitespace-pre-line text-start premise-possibilities-text">{text}</p>
					<Button>
						<Link href={link.href ? link.href : ''} target="_blank">
							{link.text}
						</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}
