import { Star } from './Star'

export const StarRating = ({ rating, id }: { id: number; rating: number }) => {
	const mockArray = Array.from({ length: 5 }, (_, idx) => idx)

	const fillValue = (idx: number) => Math.max(0, Math.min(1, rating - idx))

	return (
		<div className="flex gap-1" role="img" aria-label={`Értékelés: ${rating} az ötből`}>
			{mockArray.map((star, idx) => (
				<Star key={`star-key-${id}-${star}`} fill={fillValue(idx)} />
			))}
		</div>
	)
}
