import { notFound } from 'next/navigation'

import { getYoutubeData } from '@/utils'

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)

	const playlistId = searchParams.get('playlistId')

	if (!playlistId) {
		notFound()
	}

	const pageToken = searchParams.get('pageToken') ?? undefined

	const data = await getYoutubeData(playlistId, pageToken)

	return Response.json({
		items: data.items,
		nextPageToken: data.nextPageToken ?? null
	})
}
