import { RecursiveContent } from './RecursiveContent'
import type { ListItemType } from '../../types'

type ListItemProps = { items: ListItemType['content']; level: number }

export const ListItem = ({ items, level }: ListItemProps) => {
	return (
		<li>
			<RecursiveContent level={level + 1} data={items} />
		</li>
	)
}
