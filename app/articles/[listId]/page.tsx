import { Suspense } from 'react'

export default async function ArticlesCategoryPage({
	children
}: React.PropsWithChildren) {
	return <Suspense>{children}</Suspense>
}
