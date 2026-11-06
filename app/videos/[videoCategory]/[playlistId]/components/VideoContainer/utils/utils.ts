export const fetchVideoData = async (id: string, pageToken: string) => {
	const data = await fetch(`/api/videos?playlistId=${id}&pageToken=${pageToken}`)

	if (!data.ok) {
		throw new Error(`Request failed with status ${data.status}`)
	}

	return data
}
