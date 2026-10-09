import { ListItem } from './ListItem'
import type { OrderedListType } from '../../types'

type OrderedListProps = { level: number; list: OrderedListType['content'] }

export const OrderedList = ({ list, level }: OrderedListProps) => {
	return (
		<ol className="my-4 list-decimal ps-10">
			{list.map((listElement, idx) => (
				<ListItem
					key={`recursive-bulletList-item-level-${level}-${idx}`}
					level={level + 1}
					items={listElement.content}
				/>
			))}
		</ol>
	)
}
