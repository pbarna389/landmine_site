'use client'

import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import type { InputKeysType } from '@/types'

import { ErrorMessage } from './ErrorMessage'

type InputFactoryProps<T extends FieldValues> = {
	inputDetails: { label: string; name: Path<T>; placeholder: string; type: InputKeysType }
	isDirty: boolean
	isDisabled: boolean
	isValid: boolean
	register: UseFormRegister<T>
	error?: FieldError
}

export const InputFactory = <T extends FieldValues>({
	inputDetails,
	isDisabled,
	isDirty,
	isValid,
	register,
	error
}: InputFactoryProps<T>) => {
	const inputClasses = `outline-2 outline-black rounded p-1 pr-2 pl-2 w-full text-center text-start resize-none transition-all duration-300 text-black invalid:outline-red-700 invalid:text-red-700 group-[input] group-hover:scale-101 group-focus:scale-101 group-active:scale-y-101 invalid:placeholder:text-black/50 placeholder:text-start sm:text-start ${error ? 'outline-red-700 text-red-700 placeholder:text-red-700' : ''} ${isDirty && !error ? 'outline-emerald-600' : ''} ${isValid && !error ? 'text-emerald-600' : ''}`
	const labelClasses =
		'relative w-full min-w-1/2 max-w-3/4 sm:min-w-1/4 lg:max-w-[4/5] text-start group'

	const spanClasses = `absolute text-[13px] font-bold -top-4.5 left-0 capitalize transition-all duration-300 group-hover:scale-115 group-hover:-top-5 group-active:scale-115 ${error ? 'text-red-700' : ''} ${isValid && !error ? 'text-emerald-600' : ''}`

	const errorId = `${inputDetails.name}-error`

	switch (inputDetails.type) {
		case 'text': {
			return (
				<label className={labelClasses}>
					<span className={spanClasses}>{inputDetails.label}:</span>
					<input
						aria-invalid={!!error}
						aria-errormessage={error && errorId}
						className={inputClasses}
						type={inputDetails.type}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && (
						<ErrorMessage id={errorId} message={error.message} />
					)}
				</label>
			)
		}
		case 'email': {
			return (
				<label className={labelClasses}>
					<span className={spanClasses}>{inputDetails.label}:</span>
					<input
						aria-invalid={!!error}
						aria-errormessage={error && errorId}
						type={inputDetails.type}
						className={inputClasses}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && (
						<ErrorMessage id={errorId} message={error.message} />
					)}
				</label>
			)
		}
		case 'textarea': {
			return (
				<label className={labelClasses}>
					<span className={spanClasses}>{inputDetails.label}:</span>
					<textarea
						aria-invalid={!!error}
						aria-errormessage={error && errorId}
						className={`${inputClasses} h-4/5`}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && (
						<ErrorMessage id={errorId} message={error.message} />
					)}
				</label>
			)
		}
		default: {
			const exhaustiveCheck: never = inputDetails.type

			return exhaustiveCheck
		}
	}
}
