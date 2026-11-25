import { redirect } from 'next/navigation'

import { Suspense } from 'react'

import { LoadingAnimation } from '@/components'

import { ArticleMainContent } from './sections'
import { ArticleMainSection } from './sections/ArticleMainSection'
import { getArticlesLayoutContent } from './server'

export default async function ArticleLayout({ children }: { children: React.ReactNode }) {
	const { title, filters, textContent, enabled } = await getArticlesLayoutContent()

	if (!enabled) {
		redirect('/home#heading')
	}

	return (
		<main className="wrapper-base">
			<ArticleMainSection>
				<Suspense fallback={<LoadingAnimation />}>
					<ArticleMainContent title={title} filters={filters} textContent={textContent} />
					{children}
				</Suspense>
			</ArticleMainSection>
		</main>
	)
}
