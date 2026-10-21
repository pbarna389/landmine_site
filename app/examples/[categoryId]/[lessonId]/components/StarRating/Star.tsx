import { useId } from 'react'

export const Star = ({ fill }: { fill: number }) => {
	const gradientId = useId()
	const percentage = Math.max(0, Math.min(1, fill)) * 100

	return (
		<svg
			width="24px"
			height="24px"
			viewBox="0 0 24 24"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<linearGradient id={gradientId}>
					<stop offset={`${percentage}%`} stopColor="#f5b83d" />
					<stop offset={`${percentage}%`} stopColor="#b6b6b6" />
				</linearGradient>
			</defs>
			<path
				d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107z"
				fill={`url(#${gradientId})`}
			/>
		</svg>
	)
}
