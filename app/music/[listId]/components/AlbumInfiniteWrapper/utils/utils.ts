import type { MusicAlbumCollectionType } from '@/app/schemas/musicSchemas/schemas'
import { musicListResponseSchema } from '@/app/schemas/musicSchemas/schemas'

import type { PaginationState } from '@/types'

export type FetchMusicDataParams = {
	id: string
}

export const fetchMusicData = async (
	params: { id: string },
	pagination: PaginationState
): Promise<{ items: MusicAlbumCollectionType; pagination: PaginationState }> => {
	const nextPageInfo = pagination.kind === 'page' ? pagination.pageInfo : undefined

	const { id } = params

	if (!nextPageInfo) {
		throw new Error('Invalid page pagination state')
	}

	const nextPage = nextPageInfo.currentPage + 1

	const data = await fetch(
		`/api/music?listId=${id}&currentPage=${nextPage}&pageSize=${nextPageInfo.pageSize}`
	)

	if (!data.ok) {
		throw new Error(`Request failed with status ${data.status}`)
	}

	const response = musicListResponseSchema.safeParse(await data.json())

	if (!response.success) {
		throw new Error(`Music API response parsing failed!`)
	}

	const newPagination: PaginationState = {
		kind: 'page',
		pageInfo: response.data.pagination
	}

	const updatedResponseFormat = {
		items: response.data.items,
		pagination: newPagination
	}

	return updatedResponseFormat
}
