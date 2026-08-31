import z from 'zod'

import { CONTACT_SCHEMA_CONSTANTS } from '../constants/constants'

export const CONTACT_FORM_SCHEMA = z.object({
	name: z
		.string()
		.min(CONTACT_SCHEMA_CONSTANTS.name.minLength, {
			error: CONTACT_SCHEMA_CONSTANTS.name.minErrorMessage()
		})
		.max(CONTACT_SCHEMA_CONSTANTS.name.maxLength, {
			error: CONTACT_SCHEMA_CONSTANTS.name.maxErrorMessage()
		}),
	email: z.email({ error: CONTACT_SCHEMA_CONSTANTS.email.errorMessage }),
	message: z
		.string()
		.min(CONTACT_SCHEMA_CONSTANTS.message.minLength, {
			error: CONTACT_SCHEMA_CONSTANTS.message.minErrorMessage()
		})
		.max(CONTACT_SCHEMA_CONSTANTS.message.maxLength, {
			error: CONTACT_SCHEMA_CONSTANTS.message.maxErrorMessage()
		})
})

export type ContactFormDataType = z.infer<typeof CONTACT_FORM_SCHEMA>
