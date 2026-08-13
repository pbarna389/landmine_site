/* eslint-disable no-console */
'use server'

import type { ActionStateType } from '../types'

//TODO: implement EmailJS usage here

export async function emailAction<T>(
	_: ActionStateType,
	data: T
): Promise<ActionStateType> {
	try {
		console.log(data)

		return { status: 'success' }
	} catch {
		return {
			status: 'error',
			message: 'Failed to send email'
		}
	}
}
