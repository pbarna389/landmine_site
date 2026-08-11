'use client'

import type { DefaultValues, FieldValues, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { ZodType } from 'zod'

import type { InputKeysType } from '@/types'

import { InputFactory } from './InputFactory'

type FormProps<T extends FieldValues> = {
	defaultValues: DefaultValues<T>
	inputs: { name: Path<T>; placeholder: string; type: InputKeysType }[]
	schema: ZodType<T, T>
}

export const Form = <T extends FieldValues>({
	defaultValues,
	inputs,
	schema
}: FormProps<T>) => {
	const {
		register,
		formState: { errors }
	} = useForm<T>({
		defaultValues,
		resolver: zodResolver(schema)
	})
	/*
	const onSubmit = handleSubmit((data) => console.log(data))

	if (errors) {
		console.log(errors)
	}
	*/
	return (
		<form className="flex flex-col w-full p-8">
			{inputs.map((input) => (
				<InputFactory
					key={`form-input-factory-${input.name}`}
					inputDetails={input}
					register={register}
					error={errors[input.name]}
				/>
			))}

			<button type="submit">Submit</button>
		</form>
	)
}
