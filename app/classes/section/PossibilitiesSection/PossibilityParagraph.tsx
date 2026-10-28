import Image from 'next/image'

import type { PossibilitiesBodyType } from './constants/constants'
import type { ArrayElementType } from '@/types'

type PossibilityParagraphProps = {
	content: ArrayElementType<PossibilitiesBodyType>
}

export const PossibilityParagraph = ({ content }: PossibilityParagraphProps) => {
	return (
		<>
			{content.header && (
				<h5 className="classes-heading-text">
					{content.emoticon && <span>{content.emoticon}</span>}
					{content.header}
				</h5>
			)}
			<p className="premise-possibilities-text whitespace-pre-line">{content.text}</p>
			{content.images && Array.isArray(content.images) && (
				<div className="flex flex-col items-center justify-center md:flex-row md:flex-wrap">
					{content.images.map((image) => (
						<Image
							className="object-cover min-w-[50%] max-w-3/5 sm:min-w-1/3 sm:max-w-4/9"
							key={`pos-paragraph-${image.alt}`}
							src={image.src}
							alt={image.alt}
						/>
					))}
				</div>
			)}
			{content.images && !Array.isArray(content.images) && (
				<Image
					className="object-cover w-full"
					key={`pos-paragraph-${content.images?.alt}`}
					src={content.images?.src}
					alt={content.images?.alt}
				/>
			)}
		</>
	)
}
