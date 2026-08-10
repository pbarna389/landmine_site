import { Skeleton } from '@/components'

import { SKELETON_CLASSES } from '../constants/constants'

export default function Loading() {
	const { parentSkeleton, childrenSkeleton } = SKELETON_CLASSES

	return (
		<Skeleton className={parentSkeleton}>
			<Skeleton.SkeletonCard amount={3} className={childrenSkeleton} />
		</Skeleton>
	)
}
