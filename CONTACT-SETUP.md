# Contact Form Setup - Resend Integration

Your contact form is now configured to send emails using [Resend](https://resend.com). Follow these steps to complete the setup:

## 1. Get Your Resend API Key

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. Navigate to **API Keys** in the dashboard
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (you'll only see it once!)

## 2. Configure Environment Variables

1. Open `.env.local` in the project root
2. Replace the placeholder values:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=your@email.com
```

- `RESEND_API_KEY`: Your API key from step 1
- `CONTACT_EMAIL`: The email address where you want to receive contact form submissions

## 3. Verify Domain (Optional, for Production)

The free Resend plan uses `onboarding@resend.dev` as the sender address, which works but may be flagged as spam. For production:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Add your domain (e.g., `yourdomain.com`)
4. Add the DNS records shown to your domain provider
5. Wait for verification (usually a few minutes)
6. Update the `from` field in `/app/contact/actions.ts`:

```typescript
from: 'Your Name <noreply@yourdomain.com>',
```

## 4. Test the Form

1. Start your development server:
```bash
npm run dev
```

2. Navigate to `/contact` in your browser
3. Fill out and submit the form
4. Check the email inbox for `CONTACT_EMAIL`

## 5. Free Tier Limits

Resend's free tier includes:
- **3,000 emails/month**
- **100 emails/day**
- **1 domain**

This is more than enough for a portfolio contact form. If you need more, check their [pricing page](https://resend.com/pricing).

## Troubleshooting

### Email not sending

1. Check your `.env.local` file has the correct API key
2. Restart your dev server after changing environment variables
3. Check browser console and terminal for error messages
4. Verify your API key is active in Resend dashboard

### Emails going to spam

1. Use a verified custom domain (see step 3)
2. In Resend dashboard, check your sender reputation
3. Make sure the sender email matches your verified domain

### Rate limiting

If you hit the daily limit (100 emails), responses will fail. Consider adding a rate limiter or using a database to track submissions.

## Next Steps

- ✅ API key configured
- ✅ Email receiving address set
- 🔄 Test the contact form
- ⏳ (Optional) Verify custom domain for production

---

**Security Note:** Never commit `.env.local` to Git. It's already in `.gitignore`, but double-check before pushing to ensure your API key stays private.
