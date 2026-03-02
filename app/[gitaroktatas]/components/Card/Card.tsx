import { CardBody } from './CardBody'
import { CardHeader } from './CardHeader'

type CardProps = React.PropsWithChildren & {
	className?: string
}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={`flex flex-col min-w-1/2 max-w-3/4 text-center bg-section-body rounded shadow-lg p-5 brightness-100 transition-['brightness'] duration-300 hover:brightness-105 hover:shadow-2xl active:brightness-105 active:shadow-2xl focus:brightness-105 focus:shadow-2xl sm:min-w-1/4 lg:w-1/4 lg:min-h-95 *:sm:text-center ${className}`}
		>
			{children}
		</div>
	)
}

Card.Header = CardHeader
Card.Body = CardBody
