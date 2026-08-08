import { Suspense } from 'react'

import { LoadingAnimation } from '@/components'

import { ArticleMainContent } from './sections'
import { ArticleMainSection } from './sections/ArticleMainSection'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-center bg-zinc-50 font-sans text-black">
			<ArticleMainSection>
				<Suspense fallback={<LoadingAnimation />}>
					<ArticleMainContent />
					{children}
				</Suspense>
			</ArticleMainSection>
		</main>
	)
}
