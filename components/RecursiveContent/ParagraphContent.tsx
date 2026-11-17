import type { ParagraphType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ParagraphContentProps = {
	level: number
	paragraph: ParagraphType
	classKey?: 'default' | 'possibilities' | 'mainText' | 'music' | 'videos' | 'premiseCard'
}

const paragraphClasses = {
	default: '',
	possibilities: 'premise-possibilities-text',
	music: 'music-description-text',
	videos: 'font-montserrat videos-text text-white lg:text-black',
	premiseCard: 'text-main text-[87%] whitespace-pre-line',
	mainText: 'main-text'
}
export const ParagraphContent = ({
	level,
	paragraph,
	classKey = 'default'
}: ParagraphContentProps) => {
	const selectedClassName = paragraphClasses[classKey]

	return (
		<p className={selectedClassName}>
			<RecursiveContent data={paragraph.content} level={level} />
		</p>
	)
}
