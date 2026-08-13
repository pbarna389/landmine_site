'use client'

import type { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form'

import type { InputKeysType } from '@/types'

type InputFactoryProps<T extends FieldValues> = {
	inputDetails: { name: Path<T>; placeholder: string; type: InputKeysType }
	isDisabled: boolean
	register: UseFormRegister<T>
	error?: FieldErrors<T>[Path<T>]
}

export const InputFactory = <T extends FieldValues>({
	inputDetails,
	isDisabled,
	register
}: InputFactoryProps<T>) => {
	switch (inputDetails.type) {
		case 'text': {
			return (
				<input
					type={inputDetails.type}
					className={`border border-black rounded w-full`}
					disabled={isDisabled}
					placeholder={inputDetails.placeholder}
					{...register(inputDetails.name)}
				/>
			)
		}
		case 'email': {
			return (
				<input
					type={inputDetails.type}
					className={`border border-black rounded w-full`}
					disabled={isDisabled}
					placeholder={inputDetails.placeholder}
					{...register(inputDetails.name)}
				/>
			)
		}
		case 'textarea': {
			return (
				<textarea
					className={`border border-black rounded w-full`}
					disabled={isDisabled}
					placeholder={inputDetails.placeholder}
					{...register(inputDetails.name)}
				/>
			)
		}
		default: {
			const exhaustiveCheck: never = inputDetails.type

			return exhaustiveCheck
		}
	}
}
