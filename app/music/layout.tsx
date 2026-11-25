import { redirect } from 'next/navigation'

import { Suspense } from 'react'

import { HeightRefContextProvider } from './context'
import { BackgroundImage, MainContent, MainTag, SectionRefWrapper } from './components'
import { LoadingAnimation } from '@/components'

import { getMusicContent } from './server'

export default async function MusicLayout({ children }: { children: React.ReactNode }) {
	const { musicData, subpageData, enabled } = await getMusicContent()

	if (!enabled) {
		redirect('/home#heading')
	}

	return (
		<HeightRefContextProvider>
			<MainTag>
				<BackgroundImage />
				<SectionRefWrapper>
					<Suspense fallback={<LoadingAnimation />}>
						<MainContent musicData={musicData} subpageData={subpageData}>
							{children}
						</MainContent>
					</Suspense>
				</SectionRefWrapper>
			</MainTag>
		</HeightRefContextProvider>
	)
}
