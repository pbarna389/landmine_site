'use client'

type ErrorMessageProps = { id: string; message: string }

export const ErrorMessage = ({ id, message }: ErrorMessageProps) => {
	return (
		<p id={id} className="absolute left-0 text-start text-[15px] text-red-700 font-raleway">
			{message}
		</p>
	)
}
