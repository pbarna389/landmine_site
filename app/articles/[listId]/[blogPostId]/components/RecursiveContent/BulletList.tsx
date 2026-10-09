import { ListItem } from './ListItem'
import type { BulletListType } from '../../types'

type BulletListProps = { level: number; list: BulletListType['content'] }

export const BulletList = ({ list, level }: BulletListProps) => {
	return (
		<ul className="my-4 list-disc ps-10">
			{list.map((listElement, idx) => (
				<ListItem
					key={`recursive-bulletList-item-level-${level}-${idx}`}
					level={level + 1}
					items={listElement.content}
				/>
			))}
		</ul>
	)
}
