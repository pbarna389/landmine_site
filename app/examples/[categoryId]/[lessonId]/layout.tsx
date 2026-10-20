import type { PropsWithChildren } from 'react'

export default function ExampleLessonLayout({ children }: PropsWithChildren) {
	return (
		<section>
			<p>Example Lesson Layout</p>
			{children}
		</section>
	)
}
