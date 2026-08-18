'use client'

type ErrorMessageProps = { message: string }

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	return (
		<p className="absolute bottom left-0 text-start text-[15px] text-red-700 font-raleway">
			{message}
		</p>
	)
}
