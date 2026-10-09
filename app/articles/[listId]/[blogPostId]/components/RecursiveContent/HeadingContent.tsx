import { RecursiveContent } from './RecursiveContent'
import type { TextType } from '../../types'

type HeadingTypeProps = {
	hierarchyLevel: number
	level: 1 | 2 | 3 | 4 | 5 | 6
	text: TextType[]
}

export const HeadingContent = ({ level, text, hierarchyLevel }: HeadingTypeProps) => {
	switch (level) {
		case 1: {
			return (
				<h1>
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h1>
			)
		}
		case 2: {
			return (
				<h2 className="font-bold text-xl">
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h2>
			)
		}
		case 3: {
			return (
				<h3>
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h3>
			)
		}
		case 4: {
			return (
				<h4>
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h4>
			)
		}
		case 5: {
			return (
				<h5>
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h5>
			)
		}
		case 6: {
			return (
				<h6>
					<RecursiveContent data={text} level={hierarchyLevel + 1} />
				</h6>
			)
		}
		default: {
			const _exhaustiveCheck: never = level

			return _exhaustiveCheck
		}
	}
}
