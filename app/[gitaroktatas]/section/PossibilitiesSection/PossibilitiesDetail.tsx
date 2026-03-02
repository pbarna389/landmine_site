import Link from 'next/link'

import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import type { PossibilitiesDetailsType } from './constants/constants'
import type { ArrayElementType } from '@/types'

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
				className={`w-full flex ${isEvenElement ? 'flex-col' : 'flex-col-reverse'} gap-7.5 justify-start items-start p-4 bg-section-detail rounded relative ${isEvenElement ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:gap-12 lg:w-37/40 lg:p-8`}
			>
				<div className="basis-9/20">
					{title && (
						<h3
							className={`capitalize min-w-fit max-w-2/6 font-bold text-center text-lg p-3 border border-black sm:absolute sm:text-2xl sm:-top-1.5 sm:left-8 lg:text-3xl ${isEvenElement ? 'text-start' : 'text-end'}`}
						>
							{title}
						</h3>
					)}
					<div className={`${isEvenElement ? 'mt-3' : 'mt-0'} sm:mt-13 relative group`}>
						<RotatableImage
							src={image.src}
							alt={image.alt}
							rotateLeft={isEvenElement ? false : true}
							className={'h-64.5 rounded-lg'}
						/>
						<p
							className={`block w-full mt-2 capitalize italic text-[15px] ${isEvenElement ? 'text-start' : 'text-end'} z-0 opacity-100 cursor-default select-none lg:absolute lg:-bottom-5 lg:mt-0 lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 text-sm lg:opacity-0 lg:${isEvenElement ? 'left-0' : 'right-0'}`}
						>
							{image.caption}
						</p>
					</div>
				</div>
				<div className="basis-11/20 text-justify space-y-7.5">
					<h4 className="uppercase text-start text-nowrap text-[21px] lg:text-[19px]">
						{subTitle.text} <span>{subTitle.emoticon}</span>
					</h4>
					<p className="whitespace-pre-line text-start leading-4 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[16px]">
						{text}
					</p>
					<button className="capitalize text-[16px] p-1.5 border border-hover w-fit rounded transition-colors bg-transparent duration-300 hover:bg-hover hover:text-white active:bg-hover active:text-white focus:bg-hover focus:text-white target:bg-hover target:text-white focus-visible:bg-hover focus-visible:text-white">
						<Link href={''} target="_blank">
							{link.text}
						</Link>
					</button>
				</div>
			</div>
		</div>
	)
}
