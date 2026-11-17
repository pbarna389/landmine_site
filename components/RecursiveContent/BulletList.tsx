import type { BulletListType } from '@/types'

import { ListItem } from './ListItem'

type BulletListProps = {
	level: number
	list: BulletListType['content']
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

export const BulletList = ({ list, level, classKey }: BulletListProps) => {
	return (
		<ul className="my-4 list-disc ps-10">
			{list.map((listElement, idx) => (
				<ListItem
					key={`recursive-bulletList-item-level-${level}-${idx}`}
					level={level + 1}
					items={listElement.content}
					classKey={classKey}
				/>
			))}
		</ul>
	)
}
