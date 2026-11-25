import { Suspense } from 'react'

import { LoadingAnimation } from '@/components'

import { ArticleMainContent } from './sections'
import { ArticleMainSection } from './sections/ArticleMainSection'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="wrapper-base">
			<ArticleMainSection>
				<Suspense fallback={<LoadingAnimation />}>
					<ArticleMainContent />
					{children}
				</Suspense>
			</ArticleMainSection>
		</main>
	)
}
