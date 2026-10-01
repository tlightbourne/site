# travislightbourne.com: Phase 1 site

A single-page static React site (Vite). No backend. The request-a-job form
posts straight to a form-to-email service.

## Run it locally

    npm install
    cp .env.example .env    # then fill in the form endpoint
    npm run dev             # http://localhost:5173

## Connect the form

Pick one form-to-email service. Both work with this code without changes.

- **Formspree:** create a form, set the notification email to
  travis@travislightbourne.com, and put its URL in `VITE_FORM_ENDPOINT`
  (e.g. `https://formspree.io/f/abcd1234`).
- **Web3Forms:** create an access key for travis@travislightbourne.com, set
  `VITE_FORM_ENDPOINT=https://api.web3forms.com/submit` and
  `VITE_FORM_ACCESS_KEY` to your key. The key is public by design.

Until an endpoint is set, the form shows a message pointing people to your
email. Spam protection: a hidden honeypot field is included. Turn on the
service's own spam filtering too, and add a CAPTCHA if spam gets through.

## Deploy

    npm run build           # outputs dist/

Deploy `dist/` to Netlify, Vercel or Cloudflare Pages (all have free tiers).
Set the two `VITE_` variables in the host's environment settings, then point
the travislightbourne.com DNS at the host.

## What to edit

Almost everything is in `src/config.js`:

- `phone`, `googleReviewsUrl`: shown only when filled in
- `insured`: set to `true` only once your policy is active
- `offerComputerHelp`: adds the computer-help service and form option
- `services`, `referOut`, `faqs`: the copy for those sections

Replace the photo placeholder in the About section (`about-photo` in
`src/App.jsx`) with a real photo of you.

## Before launch

- Confirm the unlicensed-contractor disclosure wording in `src/config.js`
  with CSLB (B&P Code 7027.2). It appears in the footer on every view.
- Check with the City of Santa Clara building division that the listed
  services (e.g. like-for-like light fixture swaps) don't require a permit.
- Make sure travis@travislightbourne.com receives mail before connecting
  the form.
- Set up a Google Business Profile and add its reviews link to config.
