import { textClasses } from './constants/constants'
import type { ParagraphType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ParagraphContentProps = {
	level: number
	paragraph: ParagraphType
	classKey?:
		| 'default'
		| 'possibilities'
		| 'mainText'
		| 'music'
		| 'videos'
		| 'premiseCard'
		| 'priceCardMainText'
		| 'priceCardSubText'
}

export const ParagraphContent = ({
	level,
	paragraph,
	classKey = 'default'
}: ParagraphContentProps) => {
	const selectedClassName = textClasses[classKey]

	return (
		<p className={selectedClassName}>
			<RecursiveContent data={paragraph.content} level={level} />
		</p>
	)
}
