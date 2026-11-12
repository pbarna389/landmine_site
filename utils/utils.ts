import { NextResponse } from 'next/server'

import type { YoutubePlaylistResponse } from '@/app/schemas'
import { articleResponseSchema, youtubePlaylistResponseSchema } from '@/app/schemas'
import { musicListResponseSchema } from '@/app/schemas/musicSchemas/schemas'

import type { PaginationState } from '@/types'

//TODO: update the logic to handle dynamic amount of results
//TODO: update to handle access to different providers?
//TODO: handle error from BE

const forcedCache = 'force-cache'

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
			cache: forcedCache
		}
	)

	if (!res.ok) {
		throw new Error(`Youtube API error: ${res.status}`)
	}

	const response = youtubePlaylistResponseSchema.safeParse(await res.json())

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
		currentPage,
		pageSize
	})

	const response = await fetch(`/api/articles?${params.toString()}`, {
		cache: forcedCache
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

export async function getMusicData(
	listId: string,
	currentPage: string,
	pageSize: string
) {
	const params = new URLSearchParams({
		listId,
		currentPage,
		pageSize
	})

	const response = await fetch(`/api/music?${params.toString()}`, {
		cache: forcedCache
	})

	if (!response.ok) {
		throw new Error(`Music API error: ${response.status}`)
	}

	const parsedData = musicListResponseSchema.safeParse(await response.json())

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

export const paginateItems = <T>(
	selectedData: T[],
	nextPage: number,
	pageSize: number,
	maxPage: number
) => {
	const calculatedNextPage = nextPage - 1

	const currentStart = calculatedNextPage * pageSize

	const currentContent = selectedData.slice(currentStart, currentStart + pageSize)

	return {
		items: currentContent,
		pagination: {
			maxPage,
			pageSize,
			currentPage: calculatedNextPage + 1
		}
	}
}

export const validateRequest = (nextPage: number, pageSize: number, maxPage: number) => {
	if (
		!Number.isInteger(pageSize) ||
		pageSize <= 0 ||
		!Number.isInteger(nextPage) ||
		nextPage <= 0 ||
		nextPage > maxPage
	) {
		return false
	}

	return true
}

export const badRequest = (message: string) =>
	NextResponse.json({ error: message }, { status: 400 })
