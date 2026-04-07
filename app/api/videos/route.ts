import { getYoutubeData } from '@/utils'

//TODO: update the route to get the id from the route - now the id is just a placeholder

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)

	const pageToken = searchParams.get('pageToken') ?? undefined

	const data = await getYoutubeData('PLn5cNXlh5JYNmWSHVLMsA6F_3wNRhaofk', pageToken)

	return Response.json({
		items: data.items,
		nextPageToken: data.nextPageToken ?? null
	})
}
