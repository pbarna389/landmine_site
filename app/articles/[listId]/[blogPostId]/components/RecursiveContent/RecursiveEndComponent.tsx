import Image from 'next/image'

import { TextContent } from './TextContent'
import type { HardBreakType, ImageType, TextType } from '../../types'

// TODO: IMAGE STYLING

type RecursiveEndComponentProps = { data: TextType | ImageType | HardBreakType }

export const RecursiveEndComponent = ({ data }: RecursiveEndComponentProps) => {
	switch (data.type) {
		case 'text': {
			return <TextContent textContent={data} />
		}
		case 'hardBreak': {
			return <br />
		}
		case 'image': {
			return (
				<span className="flex w-full justify-center">
					<Image
						src={data.attrs.src}
						alt={data.attrs.alt}
						height={300}
						width={300}
						loading="eager"
					/>
				</span>
			)
		}
		default: {
			const _exhaustiveCheck: never = data

			return _exhaustiveCheck
		}
	}
}
