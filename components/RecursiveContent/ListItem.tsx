import { textClasses } from './constants/constants'
import type { ListItemType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ListItemProps = {
	items: ListItemType['content']
	level: number
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

export const ListItem = ({ items, level, classKey = 'default' }: ListItemProps) => {
	const selectedClassName = textClasses[classKey]

	return (
		<li className={`${selectedClassName}`}>
			<RecursiveContent level={level + 1} data={items} />
		</li>
	)
}
