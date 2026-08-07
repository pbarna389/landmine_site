import { Suspense } from 'react'

import { ArticleMainContent } from './sections'
import { ArticleMainSection } from './sections/ArticleMainSection'

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="flex flex-col items-center bg-zinc-50 font-sans text-black">
			<ArticleMainSection>
				<Suspense fallback={<p className="min-h-screen bg-transparent">Loading...</p>}>
					<ArticleMainContent />
					{children}
				</Suspense>
			</ArticleMainSection>
		</main>
	)
}
