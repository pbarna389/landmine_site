import type { PaginationState } from './../../../../../../context/reducer/CacheReducer'
export const fetchVideoData = async (id: string, pagination: PaginationState) => {
	const nextPageToken = pagination.kind === 'token' ? pagination.nextPageToken : undefined

	if (!nextPageToken) {
		throw new Error('No token is provided')
	}

	const data = await fetch(`/api/videos?playlistId=${id}&pageToken=${nextPageToken}`)

	if (!data.ok) {
		throw new Error(`Request failed with status ${data.status}`)
	}

	return data
}
