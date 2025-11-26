'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { AnimatedSection } from '@/components/animated-section'
import { submitContactForm, type ContactFormData } from './actions'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting')
    setMessage('')

    const result = await submitContactForm(data)

    if (result.success) {
      setStatus('success')
      setMessage(result.message)
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } else {
      setStatus('error')
      setMessage(result.message)
    }
  }

  return (
    <div className="min-h-screen bg-background px-6 py-20 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center justify-center rounded-full bg-accent/10 p-4">
              <Mail className="h-8 w-8 text-accent" />
            </div>
            <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Get in Touch
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-foreground-secondary">
              Have a project in mind? Want to collaborate? Or just want to say hi?
              I'd love to hear from you.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-1">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <h2 className="mb-4 text-xl font-semibold">Contact Information</h2>
                <div className="space-y-4 text-sm text-foreground-secondary">
                  <div>
                    <p className="mb-1 font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@example.com"
                      className="transition-colors hover:text-accent"
                    >
                      hello@example.com
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-foreground">Response Time</p>
                    <p>Usually within 24 hours</p>
                  </div>
                  <div>
                    <p className="mb-1 font-medium text-foreground">Location</p>
                    <p>Available for remote work</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background-surface p-6">
                <h2 className="mb-4 text-xl font-semibold">What to Expect</h2>
                <ul className="space-y-2 text-sm text-foreground-secondary">
                  <li>• Quick response to all inquiries</li>
                  <li>• Professional and friendly communication</li>
                  <li>• Honest assessment of project fit</li>
                  <li>• Clear next steps and timeline</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="rounded-2xl border border-border bg-background-surface p-8"
            >
              <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-500/10 p-4 text-green-500">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-medium">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-500/10 p-4 text-red-500">
                  <AlertCircle className="h-5 w-5" />
                  <p className="font-medium">{message}</p>
                </div>
              )}

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Name *
                  </label>
                  <input
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    type="text"
                    id="name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email *
                  </label>
                  <input
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    type="email"
                    id="email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject *
                  </label>
                  <input
                    {...register('subject', {
                      required: 'Subject is required',
                      minLength: {
                        value: 5,
                        message: 'Subject must be at least 5 characters',
                      },
                    })}
                    type="text"
                    id="subject"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Message *
                  </label>
                  <textarea
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                    id="message"
                    rows={6}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell me about your project or idea..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  {status === 'submitting' ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
