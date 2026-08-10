import { getMusicContentMock, getMusicListContentMock } from './music.mock'

export const getMusicContent = async () => {
	const result = await getMusicContentMock()

	return result
}

export const getMusicListContent = async (listId: string) => {
	const result = await getMusicListContentMock()

	const selectedList = result.find((list) => list.id.toString() === listId)

	if (!selectedList) return

	const content = [...selectedList.content].sort(
		(current, next) =>
			Number(next.id.split('-').at(-1)) - Number(current.id.split('-').at(-1))
	)

	return content
}
