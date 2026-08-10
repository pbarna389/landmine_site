import { Suspense } from 'react'

import { LoadingAnimation } from '@/components'

import { VideoAdvertSection, VideoMainSection } from './sections'

export default function VideosLayout({ children }: React.PropsWithChildren) {
	return (
		<main className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-raleway *:text-black">
			<VideoMainSection>
				<Suspense fallback={<LoadingAnimation />}>{children}</Suspense>
			</VideoMainSection>
			<section className="flex flex-col gap-5 p-16 justify-center items-center bg-video-advert w-full *:text-white *:text-center *:font-montserrat">
				<Suspense fallback={<LoadingAnimation />}>
					<VideoAdvertSection />
				</Suspense>
			</section>
		</main>
	)
}
