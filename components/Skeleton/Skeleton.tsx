import { SkeletonCard } from './SkeletonCard'

type SkeletonProps = React.PropsWithChildren & {
	className: string
}

export const Skeleton = ({ children, className }: SkeletonProps) => {
	return <div className={className}>{children}</div>
}

Skeleton.SkeletonCard = SkeletonCard
