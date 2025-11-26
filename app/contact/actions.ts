'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type ContactFormData = z.infer<typeof contactSchema>

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validatedData = contactSchema.parse(data)

    // TODO: Implement your email sending logic here
    // For now, we'll just log it and simulate a delay
    console.log('Contact form submission:', validatedData)
    
    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Example integrations you could add:
    // - Send email via SendGrid, AWS SES, or similar
    // - Save to database
    // - Send to Slack/Discord webhook
    // - Create GitHub issue
    
    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Validation failed',
        errors: error.errors.map((e) => e.message),
      }
    }
    
    console.error('Error submitting contact form:', error)
    return {
      success: false,
      message: 'An error occurred. Please try again later.',
    }
  }
}
