import type { EmailProvider } from './email.types'
import { CONTACT_FORM_SCHEMA } from '../../schema/schema'

export const emailJSProvider: EmailProvider = {
	async sendContactEmail(data) {
		const result = CONTACT_FORM_SCHEMA.safeParse(data)

		if (!result.success) {
			throw new Error('Error in schema validation on the BE!')
		}

		const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				service_id: process.env.EMAILJS_SERVICE_ID,
				template_id: process.env.EMAILJS_TEMPLATE_ID,
				user_id: process.env.EMAILJS_PUBLIC_KEY,
				accessToken: process.env.EMAILJS_PRIVATE_KEY,
				template_params: {
					from_name: result.data.name,
					from_email: result.data.email,
					message: result.data.message
				}
			})
		})

		if (!response.ok) {
			throw new Error('Something went wrong on the EmailJS side ')
		} else {
			return { status: 'success' }
		}
	}
}
