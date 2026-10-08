import type { MarksType, TextType } from '../../types'

type TextContentProps = { textContent: TextType }

const createMarks = (marks: MarksType[]) => {
	const classNames: { [key in MarksType['type']]: string } = {
		bold: 'font-bold',
		italic: 'text-italic',
		underline: 'underline'
	}

	return marks.map((mark) => classNames[mark.type]).join(' ')
}

export const TextContent = ({ textContent }: TextContentProps) => {
	const marks = textContent.marks && createMarks(textContent.marks)

	return <span className={`${marks ? marks : ''}`}>{textContent.text}</span>
}
