import type { PropsWithChildren } from 'react'

import { ExamplesNavbar } from './components'

import { ExamplesMainSection } from './sections'
import { getExamplesMainContent } from './server/examples.service'

export default async function ExamplesMainLayout({ children }: PropsWithChildren) {
	const { textContent, title, link, filters } = await getExamplesMainContent()

	return (
		<main className="flex relative flex-col items-center bg-zinc-50 font-sans text-black">
			<ExamplesMainSection textContent={textContent} title={title} link={link} />
			<ExamplesNavbar links={filters} />
			{children}
		</main>
	)
}
