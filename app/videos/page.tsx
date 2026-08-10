import { Suspense } from 'react'

import { MainContent } from './components/MainContent/MainContent'
import { LoadingAnimation } from '@/components'

export default function VideosPage() {
	return (
		<Suspense fallback={<LoadingAnimation />}>
			<MainContent />
		</Suspense>
	)
}
