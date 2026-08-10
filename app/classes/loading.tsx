import { Skeleton } from '@/components'

export default function ClassesLoading() {
	return (
		<Skeleton className="flex w-screen gap-10 flex-col min-h-screen bg-zinc-50 items-center">
			<Skeleton.SkeletonCard
				amount={4}
				className="w-full min-h-screen bg-black/50  animate-skeletonAnim"
			/>
		</Skeleton>
	)
}
