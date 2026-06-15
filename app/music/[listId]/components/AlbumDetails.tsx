import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components'

import type { SubpageContentType } from '../../constants/constants'

type AlbumDetailsProps = { album: SubpageContentType; idx: number }

export const AlbumDetails = ({ album, idx }: AlbumDetailsProps) => {
	const link = {
		text: 'Stream',
		href: album.href
	}

	return (
		<div
			className={`flex gap-7 p-8 pl-1 pr-1 flex-col w-full group sm:p-8 sm:pl-5 sm:pr-5 lg:flex-row ${idx === 0 ? 'pt-0 border-t-0' : 'border-t-2 border-gray-300'}`}
		>
			<div className="relative w-full basis-[47.662%] h-full">
				<div className="w-full h-full rounded-sm overflow-hidden transition-[border] duration-75 border-2 border-gray-400">
					<Image
						className="w-full h-full transition-[scale] duration-200 group-hover:scale-105"
						src={album.image}
						alt={`album cover for ${album.title}`}
					/>
				</div>
			</div>
			<div className="basis-1/2 flex flex-col justify-between *:text-center *:lg:text-start *:font-montserrat">
				<h3 className="font-bold text-[22px]">{album.title}</h3>
				<p className="text-[22px]">
					{album.format}, {album.releaseDate}
				</p>
				<p className="text-[18px] font-normal text-music-link">{album.style}</p>
				<div className="flex gap-5">
					<Button>
						<Link href={link.href ? link.href : ''} target="_blank">
							{link.text}
						</Link>
					</Button>
					<Button>
						<span>Napló</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
