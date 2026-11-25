import { redirect } from 'next/navigation'

import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'

import { ExamplesNavbar, MainContentLoading } from './components'

import { ExamplesMainSection } from './sections'
import { getExamplesMainContent } from './server/examples.service'

export default async function ExamplesMainLayout({ children }: PropsWithChildren) {
	const content = await getExamplesMainContent()

	if (!content.enabled) {
		redirect(`/home#heading`)
	}

	return (
		<main className="flex flex-col items-center bg-zinc-50 font-sans text-black relative">
			<Suspense fallback={<MainContentLoading />}>
				<ExamplesMainSection
					link={content.link}
					title={content.title}
					textContent={content.textContent}
				/>
				<ExamplesNavbar />
			</Suspense>
			{children}
		</main>
	)
}
