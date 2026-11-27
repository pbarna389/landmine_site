import { Gallery } from '@/components'
import { CLASSROOM_CONTENT } from './constants/constants'
import { NAVIGATION_HEADING_ID_REFERENCE } from '@/constants/constants'

// Gallery is just a placeholder here

export default function HomePage() {
	return (
		<main
			id={NAVIGATION_HEADING_ID_REFERENCE}
			className="wrapper-base scroll-mt-15 min-h-screen justify-center bg-black"
		>
			<h1 className="text-2xl  text-white">Homepage</h1>

			<Gallery images={CLASSROOM_CONTENT.content.images} />
		</main>
	)
}
