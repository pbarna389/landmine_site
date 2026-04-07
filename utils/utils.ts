import type { YoutubePlaylistResponse } from '@/types'

export async function getYoutubeData(
	playlistId: string,
	pageToken?: string
): Promise<YoutubePlaylistResponse> {
	const searchParams = new URLSearchParams({
		part: 'snippet',
		maxResults: '10',
		playlistId,
		key: process.env.YOUTUBE_API_KEY!
	})

	if (pageToken) {
		searchParams.set('pageToken', pageToken)
	}

	const res = await fetch(
		`https://youtube.googleapis.com/youtube/v3/playlistItems?${searchParams.toString()}`,
		{
			cache: 'no-store'
		}
	)

	if (!res.ok) {
		throw new Error(`Youtube API error: ${res.status}`)
	}

	const data = (await res.json()) as YoutubePlaylistResponse

	return {
		items: data.items ?? [],
		nextPageToken: data.nextPageToken ?? null
	}
}
