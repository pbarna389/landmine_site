import type { ContactFormDataType } from '../../schema/schema'

export type EmailProvider = {
	sendContactEmail: (data: ContactFormDataType) => Promise<void>
}
