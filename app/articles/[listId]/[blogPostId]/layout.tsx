import { Suspense } from 'react'

import { BlogPostModal } from './components'

import Loading from './loading'

export default function BlogPostIdLayout({ children }: React.PropsWithChildren) {
	return (
		<Suspense fallback={<Loading />}>
			<BlogPostModal>
				<article>{children}</article>
			</BlogPostModal>
		</Suspense>
	)
}
