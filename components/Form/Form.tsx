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
	inputs: { label: string; name: Path<T>; placeholder: string; type: InputKeysType }[]
	schema: ZodType<T, T>
}

export const Form = <T extends FieldValues>({
	defaultValues,
	inputs,
	schema,
	action
}: FormProps<T>) => {
	const [_state, submitAction, isPending] = useActionState<ActionStateType, T>(action, {
		status: 'idle'
	})

	const { register, handleSubmit, getFieldState, formState, reset } = useForm<T>({
		mode: 'all',
		defaultValues,
		resolver: zodResolver(schema)
	})

	const onSubmit = handleSubmit((data) => {
		startTransition(() => submitAction(data))
		reset()
	})

	return (
		<form
			className="flex flex-col items-center justify-center gap-25 sm:gap-10 w-full"
			onSubmit={onSubmit}
			autoComplete="off"
		>
			{inputs.map((input) => {
				const { error, isDirty } = getFieldState(input.name, formState)

				return (
					<InputFactory
						key={`form-input-factory-${input.name}`}
						inputDetails={input}
						isDisabled={isPending}
						isDirty={isDirty}
						isValid={formState.isValid}
						register={register}
						error={error}
					/>
				)
			})}
			<button
				className="border-3 outline-black rounded-md  w-full min-w-1/2 max-w-3/4 sm:min-w-1/4 lg:max-w-[4/5]  p-5 pt-2.5 pb-2.5 cursor-pointer transition-all hover:scale-105 opacity-100 focus:scale-105 lg:hover:scale-105 lg:focus:scale-110 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:scale-100"
				disabled={isPending || !formState.isValid}
				type="submit"
			>
				Submit
			</button>
		</form>
	)
}
