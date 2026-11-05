import type { ParagraphType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ParagraphContentProps = {
	level: number
	paragraph: ParagraphType
	classKey?: 'default' | 'possibilities'
}

const paragraphClasses = {
	default: '',
	possibilities: 'premise-possibilities-text'
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
