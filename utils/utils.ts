import type { YoutubePlaylistResponse } from '@/app/schemas'
import { articleResponseSchema, youtubePlaylistResponseSchema } from '@/app/schemas'

import type { PaginationState } from '@/types'

//TODO: update the logic to handle dynamic amount of results
//TODO: update to handle access to different providers?
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

	const response = youtubePlaylistResponseSchema.safeParse(await res.json())

	if (!response.success) {
		console.error('YouTube response validation failed:', {
			playlistId,
			issues: response.error.issues
		})
	}

	if (!response.success) throw new Error('Error while parsing the initial youtube data!')

	return {
		items:
			response.data?.items.filter((item) => item.status.privacyStatus !== 'private') ?? [],
		nextPageToken: response.data?.nextPageToken ?? undefined
	}
}

export const mockResponse = async <T>(data: T, timeoutTime = 800): Promise<T> => {
	return new Promise<T>((resolve) => {
		setTimeout(() => {
			resolve(data)
		}, timeoutTime)
	})
}

export async function getArticlesData(
	listId: string,
	currentPage: string,
	pageSize: string
) {
	const params = new URLSearchParams({
		listId,
		page: currentPage,
		pageSize
	})

	const response = await fetch(`/api/articles?${params.toString()}`, {
		cache: 'force-cache'
	})

	if (!response.ok) {
		throw new Error(`Article API error: ${response.status}`)
	}

	const parsedData = articleResponseSchema.safeParse(await response.json())

	if (!parsedData.success) {
		throw new Error(`Article parsing error: ${parsedData.error.message}`)
	}

	return parsedData.data
}

export const hasNextPage = (pagination: PaginationState | null): boolean => {
	if (!pagination) return false

	if (pagination.kind === 'token') {
		return !!pagination.nextPageToken
	}

	const { pageInfo } = pagination

	return pageInfo !== null && pageInfo.currentPage < pageInfo.maxPage
}
