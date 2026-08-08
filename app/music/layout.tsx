import { Suspense } from 'react'

import { HeightRefContextProvider } from './context'
import { BackgroundImage, MainContent, MainTag, SectionRefWrapper } from './components'
import { LoadingAnimation } from '@/components'

export default async function MusicLayout({ children }: { children: React.ReactNode }) {
	return (
		<HeightRefContextProvider>
			<MainTag>
				<BackgroundImage />
				<SectionRefWrapper>
					<Suspense fallback={<LoadingAnimation />}>
						<MainContent>{children}</MainContent>
					</Suspense>
				</SectionRefWrapper>
			</MainTag>
		</HeightRefContextProvider>
	)
}
