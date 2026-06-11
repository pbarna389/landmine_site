import Image from 'next/image'

import type { SubpageContentType } from '../../constants/constants'

type AlbumDetailsProps = { album: SubpageContentType; idx: number }

export const AlbumDetails = ({ album, idx }: AlbumDetailsProps) => {
	return (
		<div
			className={`flex gap-7 flex-col w-full p-8 pl-5 pr-5 ${idx === 0 ? 'pt-0 border-t-0' : 'border-t-2 border-gray-300'} lg:flex-row`}
		>
			<div className="relative w-full basis-[47.662%] h-full border-2 border-gray-400">
				<Image
					className="w-full h-full"
					src={album.image}
					alt={`album cover for ${album.title}`}
				/>
			</div>
			<div className="basis-1/2 *:text-start space-y-5 *:font-montserrat">
				<h3 className="font-bold text-[22px]">{album.title}</h3>
				<p className="text-[22px]">
					{album.format}, {album.releaseDate}
				</p>
				<p className="text-[18px] font-normal text-music-link">{album.style}</p>
			</div>
		</div>
	)
}
