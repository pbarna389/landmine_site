type SkeletonCardProps = {
	amount: number
	className: string
}

export const SkeletonCard = ({ amount, className }: SkeletonCardProps) => {
	const placeHolderArray = Array.from(
		{ length: amount },
		(_, idx) => `skeleton placeholder ${idx + 1}`
	)

	return placeHolderArray.map((skeleton) => <span key={skeleton} className={className} />)
}
