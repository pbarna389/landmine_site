import type { PropsWithChildren } from 'react'

export default function ExampleCategoryLayout({ children }: PropsWithChildren) {
	return (
		<section>
			<p>Example Category Layout</p>
			{children}
		</section>
	)
}
