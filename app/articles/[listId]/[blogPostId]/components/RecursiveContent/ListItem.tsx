import { RecursiveContent } from './RecursiveContent'
import type { ListItemType } from '../../types'

type ListItemProps = { items: ListItemType['content']; level: number }

export const ListItem = ({ items, level }: ListItemProps) => {
	return items.map((item, idx) => (
		<li key={`recusrive-listItem-${level + 1}-${item.type}-${idx}`}>
			<RecursiveContent level={level + 1} data={item.content} />
		</li>
	))
}
