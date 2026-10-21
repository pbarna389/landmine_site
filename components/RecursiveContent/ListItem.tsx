import type { ListItemType } from '@/types'

import { RecursiveContent } from './RecursiveContent'

type ListItemProps = { items: ListItemType['content']; level: number }

export const ListItem = ({ items, level }: ListItemProps) => {
	return (
		<li>
			<RecursiveContent level={level + 1} data={items} />
		</li>
	)
}
