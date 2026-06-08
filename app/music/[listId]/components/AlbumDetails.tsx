import type { SubpageContentType } from '../../constants/constants'

type AlbumDetailsProps = { album: SubpageContentType }

export const AlbumDetails = ({ album }: AlbumDetailsProps) => {
	return <div>{album.title}</div>
}
