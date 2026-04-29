import { Skeleton } from '@/components'
import { SKELETON_CLASSES } from './constants'

type PlaylistSkeletonProps = {
	amount?: number
}

export default function PlaylistSkeleton({ amount = 10 }: PlaylistSkeletonProps) {
	const { parentSkeleton, childrenSkeleton } = SKELETON_CLASSES

	return (
		<Skeleton className={parentSkeleton}>
			<Skeleton.SkeletonCard amount={amount} className={childrenSkeleton} />
		</Skeleton>
	)
}
