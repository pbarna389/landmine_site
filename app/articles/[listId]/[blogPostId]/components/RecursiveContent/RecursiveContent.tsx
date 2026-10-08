import { objectAndArrayValidator } from './utils'

import type { BlogPostModalType } from '../../types'

type RecursiveTypeProps = {
	data: BlogPostModalType['content']['content'] | undefined
}

export const RecursiveContent = ({ data }: RecursiveTypeProps) => {
	const isValid = objectAndArrayValidator(data)

	if (!isValid) return <div>Non supported content</div>

	return <div>Recursive Content will be here</div>
}
