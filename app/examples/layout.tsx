import type { PropsWithChildren } from 'react'

import { ExamplesNavbar } from './components'
import { EXAMPLES_MAIN_CONTENT } from './constants/constants'

import { ExamplesMainSection } from './sections'

export default function ExamplesMainLayout({ children }: PropsWithChildren) {
	const { textContent, title, link, filters } = EXAMPLES_MAIN_CONTENT

	return (
		<main className="flex relative flex-col items-center bg-zinc-50 font-sans text-black">
			<ExamplesMainSection textContent={textContent} title={title} link={link} />
			<ExamplesNavbar links={filters} />
			{children}
		</main>
	)
}
