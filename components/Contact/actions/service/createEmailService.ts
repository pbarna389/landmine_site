import type { EmailProvider } from './emil.types'
import type { ContactFormDataType } from '../../schema/schema'

export const createEmailService = (provider: EmailProvider) => ({
	async sendContactEmail(data: ContactFormDataType) {
		return provider.sendContactEmail(data)
	}
})
