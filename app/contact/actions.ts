'use server'

import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error('Resend API key not configured')
      return {
        success: false,
        message: 'Email service is not configured. Please contact the site administrator.',
      }
    }

    // Send email via Resend
    // Note: On free tier, you can only send to verified emails or use delivered@resend.dev for testing
    const result = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'delivered@resend.dev', // Use delivered@resend.dev for testing
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
From: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
      `,
    })

    console.log('Resend result:', result)

    if (result.error) {
      console.error('Resend error:', result.error)
      return {
        success: false,
        message: `Failed to send email: ${result.error.message || 'Unknown error'}`,
      }
    }

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
