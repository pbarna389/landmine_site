import { Gallery } from '@/components'
import { CLASSROOM_CONTENT } from './constants/constants'

//TODO: remove the endpoint

export default function ClassroomPage() {
	const { content } = CLASSROOM_CONTENT

	return (
		<main className="flex flex-col justify-center items-center w-full gap-5 bg-black font-sans text-black *:font-montserrat">
			<Gallery images={content.images} />
		</main>
	)
}
