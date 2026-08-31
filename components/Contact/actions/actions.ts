/* eslint-disable no-console */
'use server'

import { emailService } from './service/email.service'
import { CONTACT_FORM_SCHEMA, type ContactFormDataType } from '../schema/schema'
import type { ActionStateType } from '../types'

export async function emailAction<T extends ContactFormDataType>(
	_previousState: ActionStateType,
	data: T
): Promise<ActionStateType> {
	try {
		const parsedData = CONTACT_FORM_SCHEMA.safeParse(data)

		if (!parsedData.success) {
			throw new Error('Schema validation failed on the BE side')
		}

		await emailService.sendContactEmail(parsedData.data)

		return { status: 'success' }
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error(err)

			return {
				status: 'error',
				message: 'Az üzenet elküldése sikertelen volt'
			}
		}

		return {
			status: 'error',
			message: 'unknown error'
		}
	}
}
