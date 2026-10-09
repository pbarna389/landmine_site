import type { MarksType, TextType } from '../../types'

type TextContentProps = { textContent: TextType }

const createTextStyle = (textStyle: {
	backgroundColor?: `#${string}${string}${string}${string}${string}${string}` | undefined
	color?: `#${string}${string}${string}${string}${string}${string}` | undefined
	fontSize?: `${number}px` | undefined
}) => {
	const result = []

	for (const key in textStyle) {
		if (key === 'backgroundColor') {
			result.push(`bg-[${textStyle[key]}]`)
		}
		if (key === 'fontSize') {
			result.push(`text-[${textStyle[key]}]`)
		}
		if (key === 'color') {
			result.push(`text-[${textStyle[key]}]`)
		}
	}

	return result.join(' ')
}

const createMarks = (marks: MarksType[]) => {
	const classNames: { [key in MarksType['type']]: string } = {
		bold: 'font-bold',
		italic: 'italic',
		underline: 'underline',
		textStyle: ''
	}

	return marks
		.map((mark) =>
			mark.type !== 'textStyle' ? classNames[mark.type] : createTextStyle(mark.attrs)
		)
		.join(' ')
}

export const TextContent = ({ textContent }: TextContentProps) => {
	const marks = textContent.marks && createMarks(textContent.marks)

	const textStyle = textContent.marks?.find((mark) => mark.type === 'textStyle')
	const attrs = textStyle?.type === 'textStyle' ? textStyle.attrs : undefined

	return (
		<span
			className={`${marks ? marks : ''}`}
			style={{
				backgroundColor: attrs?.backgroundColor,
				color: attrs?.color,
				fontSize: attrs?.fontSize
			}}
		>
			{textContent.text}
		</span>
	)
}
