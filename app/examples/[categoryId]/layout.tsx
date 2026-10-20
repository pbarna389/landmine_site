import type { PropsWithChildren } from 'react'

export default function ExampleCategoryLayout({ children }: PropsWithChildren) {
	return (
		<section className="flex flex-col items-center bg-zinc-50 font-sans text-black">
			<p>Example Category Layout</p>
			{children}
		</section>
	)
}
