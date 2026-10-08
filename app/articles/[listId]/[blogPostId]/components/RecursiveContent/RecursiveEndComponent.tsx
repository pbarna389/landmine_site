import Image from 'next/image'

import { TextContent } from './TextContent'
import type { HardBreakType, ImageType, TextType } from '../../types'

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
				<Image
					src={data.attrs.src}
					alt={data.attrs.alt}
					height={400}
					width={400}
					loading="eager"
				/>
			)
		}
		default: {
			const _exhaustiveCheck: never = data

			return _exhaustiveCheck
		}
	}
}
