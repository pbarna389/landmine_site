/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { startTransition, useActionState } from 'react'

import type { DefaultValues, FieldValues, Path } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import type { ZodType } from 'zod'

import type { InputKeysType } from '@/types'

import { InputFactory } from './InputFactory'

type FormProps<T extends FieldValues> = {
	action: (previousState: T | null, data: T) => T | null | Promise<T | null>
	defaultValues: DefaultValues<T>
	inputs: { name: Path<T>; placeholder: string; type: InputKeysType }[]
	schema: ZodType<T, T>
}

export const Form = <T extends FieldValues>({
	defaultValues,
	inputs,
	schema,
	action
}: FormProps<T>) => {
	const [state, submitAction, isPending] = useActionState<T | null, T>(action, null)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<T>({
		defaultValues,
		resolver: zodResolver(schema)
	})

	const onSubmit = handleSubmit((data) => {
		console.log(data)

		console.log('action executes after client side validation')

		startTransition(() => submitAction(data))
	})

	if (errors) {
		console.log(errors)
	}

	return (
		<form
			className="flex flex-col items-center justify-center gap-5 w-full p-8"
			onSubmit={onSubmit}
		>
			{inputs.map((input) => (
				<InputFactory
					key={`form-input-factory-${input.name}`}
					inputDetails={input}
					isDisabled={isPending}
					register={register}
					error={errors[input.name]}
				/>
			))}

			<button type="submit">Submit</button>
		</form>
	)
}
