import Image from 'next/image'

import { RecursiveContent } from '@/components'
import type { PossibilitiesBodyType } from './constants/constants'
import type { ArrayElementType } from '@/types'

type PossibilityParagraphProps = {
	content: ArrayElementType<PossibilitiesBodyType>
}

export const PossibilityParagraph = ({ content }: PossibilityParagraphProps) => {
	return (
		<>
			<RecursiveContent data={content.text.content} level={0} classKey="possibilities" />
			{content.images && Array.isArray(content.images) && (
				<div className="flex flex-col items-center justify-center sm:flex-wrap gap-2.5 sm:flex-row">
					{content.images.map((image) => (
						<Image
							className="object-cover w-1/2 sm:w-[35%] md:w-[28%] lg:w-[27.3%] xl:w-[32.8%] 2xl:w-[28.87%]"
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
