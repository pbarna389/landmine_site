'use client'

import type { FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import type { InputKeysType } from '@/types'

import { ErrorMessage } from './ErrorMessage'

type InputFactoryProps<T extends FieldValues> = {
	inputDetails: { name: Path<T>; placeholder: string; type: InputKeysType }
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
	const defaultClasses = `outline-2 outline-black rounded p-1 pr-2 pl-2 w-full text-center text-start resize-none transition-all duration-300 text-black isDirty:outline invalid:outline-red-700 invalid:text-red-700  hover:scale-105 focus:scale-105 invalid:placeholder:text-black/50 placeholder:text-start sm:text-start ${error ? 'outline-red-700 text-red-700 placeholder:text-black/50' : ''} ${isDirty && !error ? 'outline-emerald-600' : ''} ${isValid && !error ? 'text-emerald-600' : ''}`
	const labelClasses =
		'relative w-full min-w-1/2 max-w-3/4 sm:min-w-1/4 lg:max-w-[4/5] text-start'

	const errorId = `${inputDetails.name}-error`

	switch (inputDetails.type) {
		case 'text': {
			return (
				<label className={labelClasses}>
					<input
						aria-invalid={!!error}
						aria-describedby={error && errorId}
						aria-details={error?.message}
						className={defaultClasses}
						type={inputDetails.type}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && <ErrorMessage message={error.message} />}
				</label>
			)
		}
		case 'email': {
			return (
				<label className={labelClasses}>
					<input
						aria-invalid={!!error}
						aria-describedby={error && errorId}
						aria-details={error?.message}
						type={inputDetails.type}
						className={defaultClasses}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && <ErrorMessage message={error.message} />}
				</label>
			)
		}
		case 'textarea': {
			return (
				<label className={labelClasses}>
					<textarea
						aria-invalid={!!error}
						aria-describedby={error && errorId}
						aria-details={error?.message}
						className={`${defaultClasses} h-4/5`}
						disabled={isDisabled}
						placeholder={inputDetails.placeholder}
						{...register(inputDetails.name)}
					/>
					{typeof error?.message === 'string' && <ErrorMessage message={error.message} />}
				</label>
			)
		}
		default: {
			const exhaustiveCheck: never = inputDetails.type

			return exhaustiveCheck
		}
	}
}
