<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/ac5f27f2-5325-4bf8-8a3b-4e51fc2fa10a

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Contact form setup

The contact form on the site is wired to send submissions by email via [Formspree](https://formspree.io):

1. Sign up at formspree.io (free tier: 50 submissions/month).
2. Create a new form and set the recipient to `mihikasinghofficial@gmail.com`.
3. Copy the endpoint it gives you (looks like `https://formspree.io/f/xxxxxxxx`).
4. Open `src/components/AboutServicesContact.tsx` and replace the `FORM_ENDPOINT` constant near the top of the file with that URL.
5. Rebuild/redeploy. Submissions will now land directly in the inbox, with a "Message sent" confirmation shown on the page.

Until step 4 is done, the form automatically falls back to opening the visitor's email client instead (mailto), so it's never fully broken.
