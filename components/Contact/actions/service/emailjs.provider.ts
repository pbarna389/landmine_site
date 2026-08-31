import type { EmailProvider } from './email.types'

export const emailJSProvider: EmailProvider = {
	async sendContactEmail(data) {
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
					from_name: data.name,
					from_email: data.email,
					message: data.message
				}
			})
		})

		if (!response.ok) {
			throw new Error(`Something went wrong on the email provider's side`)
		}
	}
}
