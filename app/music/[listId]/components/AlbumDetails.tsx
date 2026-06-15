import Image from 'next/image'

import type { SubpageContentType } from '../../constants/constants'

type AlbumDetailsProps = { album: SubpageContentType; idx: number }

export const AlbumDetails = ({ album, idx }: AlbumDetailsProps) => {
	return (
		<div
			className={`flex gap-7 p-8 pl-1 pr-1 flex-col w-full sm:p-8 sm:pl-5 sm:pr-5 group ${idx === 0 ? 'pt-0 border-t-0' : 'border-t-2 border-gray-300'} lg:flex-row`}
		>
			<div className="relative w-full basis-[47.662%] h-full">
				<div className="w-full h-full overflow-hidden transition-[border] duration-75 border-2 border-gray-400 group-hover:border-4">
					<Image
						className="w-full h-full transition-[scale] duration-200 group-hover:scale-105"
						src={album.image}
						alt={`album cover for ${album.title}`}
					/>
				</div>
			</div>
			<div className="basis-1/2 *:text-center *:lg:text-start space-y-5 *:font-montserrat">
				<h3 className="font-bold text-[22px]">{album.title}</h3>
				<p className="text-[22px]">
					{album.format}, {album.releaseDate}
				</p>
				<p className="text-[18px] font-normal text-music-link">{album.style}</p>
			</div>
		</div>
	)
}
