import type { PropsWithChildren } from 'react'

export default function ExamplesMainlayout({ children }: PropsWithChildren) {
	return (
		<main>
			<p>Examples Main Layout</p>
			{children}
		</main>
	)
}
