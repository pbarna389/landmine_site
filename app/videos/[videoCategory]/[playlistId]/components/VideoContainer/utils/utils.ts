import type { YoutubePlayListItem } from '@/app/schemas'
import { youtubePlaylistResponseSchema } from '@/app/schemas'

import type { PaginationState } from '@/types'

export const fetchVideoData = async (
	id: string,
	pagination: PaginationState
): Promise<{ items: YoutubePlayListItem[]; pagination: PaginationState }> => {
	const nextPageToken = pagination.kind === 'token' ? pagination.nextPageToken : undefined

	if (!nextPageToken) {
		throw new Error('No token is provided')
	}

	const data = await fetch(`/api/videos?playlistId=${id}&pageToken=${nextPageToken}`)

	if (!data.ok) {
		throw new Error(`Request failed with status ${data.status}`)
	}

	const response = youtubePlaylistResponseSchema.safeParse(await data.json())

	if (!response.success) {
		throw new Error(`Youtube response parsing failed!`)
	}

	const newPagination: PaginationState = {
		kind: 'token',
		nextPageToken: response.data.nextPageToken ?? null
	}

	const updatedResponseFormat = {
		items: response.data.items,
		pagination: newPagination
	}

	return updatedResponseFormat
}
