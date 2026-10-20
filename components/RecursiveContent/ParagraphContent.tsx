import type { ParagraphType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ParagraphContentProps = { level: number; paragraph: ParagraphType }
export const ParagraphContent = ({ level, paragraph }: ParagraphContentProps) => {
	return (
		<p>
			<RecursiveContent data={paragraph.content} level={level} />
		</p>
	)
}
