import { Skeleton } from '@/components'

export const SKELETON_CLASSES = {
	parentSkeleton:
		'grid gap-5 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
	childrenSkeleton:
		'items-start gap-2.5 max-w-full w-full h-65 lg:h-80 rounded-xl border border-black p-0 pt-0 pr-0 pl-0 pb-0 overflow-hidden group sm:min-w-1/4 lg:w-full lg:min-h-full *:font-montserrat bg-black/50 animate-skeletonAnim'
}

export default function Loading() {
	const { parentSkeleton, childrenSkeleton } = SKELETON_CLASSES

	return (
		<Skeleton className={parentSkeleton}>
			<Skeleton.SkeletonCard amount={3} className={childrenSkeleton} />
		</Skeleton>
	)
}
