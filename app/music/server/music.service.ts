import { cache } from 'react'

import { getMusicContentMock, getMusicListContentMock } from './music.mock'

export const getMusicContent = cache(async () => {
	const result = await getMusicContentMock()

	return result
})

export const getMusicListContent = cache(async (listId: string) => {
	const result = await getMusicListContentMock()

	const selectedList = result.find((list) => list.id.toString() === listId)

	if (!selectedList) return

	const content = [...selectedList.content].sort(
		(current, next) =>
			Number(next.id.split('-').at(-1)) - Number(current.id.split('-').at(-1))
	)

	return content
})

export const getAlbumDiary = async (listId: string, diaryId: string) => {
	const result = await getMusicListContent(listId)

	if (!result) return

	const selectedDetail = result.find((album) => album.id === diaryId)

	if (!selectedDetail) return

	return selectedDetail.details
}
