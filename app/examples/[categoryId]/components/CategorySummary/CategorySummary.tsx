type CategorySummaryProps = {
	headerText: string
	selectedDataText: {
		id: string
		text: string
	}[]
}

export const CategorySummary = ({
	headerText,
	selectedDataText
}: CategorySummaryProps) => {
	return (
		<div className="space-y-5">
			<h2 className="text-center text-2xl capitalize">{headerText}</h2>
			<ul className="text-start">
				{selectedDataText.map((text) => (
					<li className="list-disc ml-5" key={text.id}>
						{text.text}
					</li>
				))}
			</ul>
		</div>
	)
}
