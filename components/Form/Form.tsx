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
import type { ActionStateType } from '../Contact/types'

type FormProps<T extends FieldValues> = {
	action: (previousState: ActionStateType, data: T) => Promise<ActionStateType>
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
	const [_, submitAction, isPending] = useActionState<ActionStateType, T>(action, {
		status: 'idle'
	})

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
		console.log('errors in clientside')
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
