'use server'

import { emailService } from './service/email.service'
import type { ContactFormDataType } from '../schema/schema'
import type { ActionStateType } from '../types'

export async function emailAction<T extends ContactFormDataType>(
	_: ActionStateType,
	data: T
): Promise<ActionStateType> {
	try {
		const result = await emailService.sendContactEmail(data)

		return result
	} catch (err: unknown) {
		if (err instanceof Error) {
			return {
				status: 'error',
				message: err.message
			}
		}

		return {
			status: 'error',
			message: 'unknown error'
		}
	}
}
