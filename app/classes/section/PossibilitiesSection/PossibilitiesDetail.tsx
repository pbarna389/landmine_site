import Link from 'next/link'

import { Button, RecursiveContent } from '@/components'
import { RotatableImage } from '@/components/RotatableImage/RotatableImage'
import type { PossibilitiesDetailsType } from './constants/constants'
import type { ArrayElementType } from '@/types'

// TODO: Do some touch ups if needed

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
		<div
			className={`w-full flex justify-center ${idx % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}
		>
			<div
				className={`flex justify-between items-start gap-4.25 p-[3%] bg-section-detail rounded relative sm:w-4/5 md:w-7/10 lg:w-full lg:p-[3.75%] ${isEvenElement ? 'flex-col lg:flex-row lg:ml-[9.05%] lg:pt-16.25 2xl:ml-[12.5%]' : 'flex-col-reverse pt-8 lg:flex-row-reverse lg:mr-[9.05%] 2xl:mr-[12.5%]'}`}
			>
				<div className="space-y-6 lg:basis-[43%] 2xl:basis-[47%]">
					{title && (
						<h3
							className={`possibilities-heading-text capitalize w-[70%] lg:w-1/3 text-center p-3.75 border border-black sm:absolute sm:-top-3 xl:left-[4.1%] 2xl:left-[4.4%] ${isEvenElement ? 'text-start' : 'text-end'}`}
						>
							{title}
						</h3>
					)}
					<div
						className={`${isEvenElement ? 'sm:mt-15' : 'mt-5'} relative group lg:mt-7.5 2xl:mt-12`}
					>
						<RotatableImage
							src={image.src}
							alt={image.alt}
							rotateLeft={isEvenElement ? false : true}
							className={'w-full rounded-lg'}
						/>
						<p
							className={`text-main block w-full mt-1 text-[14px] lg:text-[16.15px] capitalize italic z-0 opacity-100 cursor-default select-none lg:absolute lg:mt-5 lg:transition-opacity lg:duration-600 lg:translate-x-0 lg:group-hover:opacity-100 lg:group-focus:opacity-100 lg:opacity-0 lg:-bottom-10.5 xl:-bottom-11 2xl:w-1/2 2xl:-bottom-12.5  ${isEvenElement ? 'text-start left-0' : 'right-0 text-end'}`}
						>
							{image.caption}
						</p>
					</div>
				</div>
				<div className="text-justify space-y-4.25 lg:space-y-5.75 lg:basis-[51%] 2xl:basis-[47%]">
					<h4 className="classes-heading-text uppercase text-start text-nowrap">
						{subTitle.text} <span>{subTitle.emoticon}</span>
					</h4>
					<div className="whitespace-pre-line premise-possibilities-text text-justify">
						<RecursiveContent data={text.content} level={0} />
					</div>
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
