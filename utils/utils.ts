import type { YoutubePlaylistResponse } from '@/types'

//TODO: update the logic to handle dynamic amount of results
//TODO: handle error from BE

export async function getYoutubeData(
	playlistId: string,
	pageToken?: string
): Promise<YoutubePlaylistResponse> {
	const searchParams = new URLSearchParams({
		part: 'snippet,status',
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
			cache: 'force-cache'
		}
	)

	if (!res.ok) {
		throw new Error(`Youtube API error: ${res.status}`)
	}

	const data = (await res.json()) as YoutubePlaylistResponse

	return {
		items: data.items.filter((item) => item.status.privacyStatus !== 'private') ?? [],
		nextPageToken: data.nextPageToken ?? null
	}
}
