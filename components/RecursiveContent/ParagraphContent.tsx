import type { ParagraphType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ParagraphContentProps = {
	level: number
	paragraph: ParagraphType
	classKey?: 'default' | 'possibilities' | 'mainText' | 'music'
}

const paragraphClasses = {
	default: '',
	possibilities: 'premise-possibilities-text',
	music: 'music-description-text',
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
