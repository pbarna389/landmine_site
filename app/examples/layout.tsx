import type { PropsWithChildren } from 'react'
import { Suspense } from 'react'

import { ExamplesNavbar, MainContentLoading } from './components'

import { ExamplesMainSection } from './sections'

export default async function ExamplesMainLayout({ children }: PropsWithChildren) {
	return (
		<main className="flex relative flex-col items-center bg-zinc-50 font-sans text-black">
			<Suspense fallback={<MainContentLoading />}>
				<ExamplesMainSection />
				<ExamplesNavbar />
			</Suspense>
			<Suspense>{children}</Suspense>
		</main>
	)
}
