import { Suspense } from 'react'

import { MainContent } from './components'
import { LoadingAnimation } from '@/components'

import { VideoAdvertSection, VideoMainSection } from './sections'

export default function VideosPage() {
	return (
		<>
			<VideoMainSection>
				<Suspense fallback={<LoadingAnimation />}>
					<MainContent />
				</Suspense>
			</VideoMainSection>
			<section className="flex flex-col gap-5 p-16 justify-center items-center bg-video-advert w-full *:text-white *:text-center *:font-montserrat">
				<Suspense fallback={<LoadingAnimation />}>
					<VideoAdvertSection />
				</Suspense>
			</section>
		</>
	)
}
