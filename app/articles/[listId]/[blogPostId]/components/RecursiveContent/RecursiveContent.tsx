import { BulletList } from './BulletList'
import { HeadingContent } from './HeadingContent'
import { ListItem } from './ListItem'
import { ParagraphContent } from './ParagraphContent'
import { RecursiveEndComponent } from './RecursiveEndComponent'
import type {
	BlogPostModalType,
	HardBreakType,
	ImageType,
	ListItemType,
	TextType
} from '../../types'

type RecursiveTypeProps = {
	data:
		| BlogPostModalType['content']['content']
		| TextType
		| ImageType
		| HardBreakType
		| (TextType | HardBreakType)[]
		| ListItemType[]
		| undefined
	level: number
}

export const RecursiveContent = ({ data, level }: RecursiveTypeProps) => {
	if (!data) {
		return <p>Data not available</p>
	}

	if (!Array.isArray(data)) {
		return <RecursiveEndComponent data={data} />
	}

	return data.map((subData, idx) => {
		if (subData.type === 'paragraph') {
			return (
				<ParagraphContent
					key={`recusrive-paragraph-${level + 1}-${subData.content[0].type}-${idx}`}
					paragraph={subData}
					level={level + 1}
				/>
			)
		}
		if (subData.type === 'heading') {
			return (
				<HeadingContent
					key={`recusrive-heading-${level + 1}-${idx}`}
					level={subData.attrs.level}
					text={subData.content}
					hierarchyLevel={level + 1}
				/>
			)
		}
		if (subData.type === 'bulletList') {
			return (
				<BulletList
					key={`recusrive-bulletList-${level + 1}-${idx}`}
					list={subData.content}
					level={level + 1}
				/>
			)
		}

		if (subData.type === 'listItem') {
			return (
				<ListItem
					key={`recursive-listItem-${level + 1}-${idx}`}
					level={level + 1}
					items={subData.content}
				/>
			)
		}

		return (
			<RecursiveContent
				key={`recusrive-main-${level + 1}-${subData.type}-${idx}`}
				data={subData}
				level={level + 1}
			/>
		)
	})
}
