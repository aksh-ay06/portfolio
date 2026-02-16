const express = require('express');
const { Resend } = require('resend');
const path = require('path');
const { buildEmailHtml } = require('./lib/email');

const app = express();
const PORT = process.env.PORT || 3000;

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting: max 5 requests per IP per 15 minutes
const rateMap = new Map();
function rateLimit(req, res, next) {
    const ip = req.ip;
    const now = Date.now();
    const window = 15 * 60 * 1000;
    const max = 5;

    if (!rateMap.has(ip)) rateMap.set(ip, []);
    const hits = rateMap.get(ip).filter(t => now - t < window);
    hits.push(now);
    rateMap.set(ip, hits);

    if (hits.length > max) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }
    next();
}

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/api/contact', rateLimit, async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_EMAIL || 'akshaypatelnitb6@gmail.com',
            subject: `Portfolio Contact: ${name.slice(0, 100)}`,
            replyTo: email,
            html: buildEmailHtml(name, email, message),
        });

        res.json({ success: true });
    } catch (err) {
        console.error('Resend error:', err);
        res.status(500).json({ error: 'Failed to send message. Please try again.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
