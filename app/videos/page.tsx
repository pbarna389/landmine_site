import { redirect } from 'next/navigation'

import { Suspense } from 'react'

import { MainContent } from './components'
import { LoadingAnimation } from '@/components'

import { VideoAdvertSection, VideoMainSection } from './sections'
import { getVideosContent } from './server'

// TODO: Move the Video Main section and the advert section to the layout - both belongs there
// TODO: Also move the redirection to the layout

export default async function VideosPage() {
	const { title, textContent, subPages, enabled } = await getVideosContent()

	if (!enabled) {
		redirect('/home#heading')
	}

	return (
		<>
			<VideoMainSection>
				<Suspense fallback={<LoadingAnimation />}>
					<MainContent title={title} textContent={textContent} subPages={subPages} />
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
