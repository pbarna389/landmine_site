import { createEmailService } from './createEmailService'
import { emailJSProvider } from './emailjs.provider'

export const emailService = createEmailService(emailJSProvider)
