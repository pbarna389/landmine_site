import { Suspense } from 'react'

import { VideoContainer } from './components'
import { getYoutubeData } from '@/utils'

import PlaylistLoading from './loading'

export default async function VideoCategoriesPage({
	params
}: {
	params: Promise<{ playlistId: string }>
}) {
	const { playlistId } = await params

	const data = await getYoutubeData(playlistId)

	return (
		<section className="w-full text-center p-2.5 mt-5 space-y-10 ">
			<Suspense fallback={<PlaylistLoading />}>
				<VideoContainer items={data.items} nextPageToken={data.nextPageToken} />
			</Suspense>
		</section>
	)
}
