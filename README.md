# BeAIExpert.com

Marketing website for **BeAIExpert** — practical learning paths to go from AI-curious to AI-expert.

It is a dependency-free static site (HTML/CSS/JS), deployed to **GitHub Pages** on the custom domain `beaiexpert.com`.

## Structure

```
index.html          Home page
404.html            Not-found page
assets/styles.css   Styles (light + dark mode)
assets/main.js      Mobile nav, scroll reveal, waitlist form
assets/favicon.svg  Logo / favicon
CNAME               Custom domain for GitHub Pages
.github/workflows/pages.yml   Auto-deploy on push
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Hosting on beaiexpert.com

1. **Enable Pages** — GitHub repo → *Settings → Pages* → *Source: GitHub Actions*.
   Each push to `main` (or the current working branch) then deploys automatically.
2. **Custom domain** — in the same Pages screen, set the custom domain to `beaiexpert.com`
   (the `CNAME` file already declares it) and tick **Enforce HTTPS** once the certificate is issued.
3. **DNS** — at your domain registrar, add these records for `beaiexpert.com`:

   | Type  | Host / Name | Value                    |
   |-------|-------------|--------------------------|
   | A     | `@`         | `185.199.108.153`        |
   | A     | `@`         | `185.199.109.153`        |
   | A     | `@`         | `185.199.110.153`        |
   | A     | `@`         | `185.199.111.153`        |
   | AAAA  | `@`         | `2606:50c0:8000::153`    |
   | AAAA  | `@`         | `2606:50c0:8001::153`    |
   | AAAA  | `@`         | `2606:50c0:8002::153`    |
   | AAAA  | `@`         | `2606:50c0:8003::153`    |
   | CNAME | `www`       | `guptajrakesh.github.io` |

   Remove any conflicting A/CNAME records (e.g. registrar parking pages). DNS can take up to 24–48 hours to propagate.
4. *(Recommended)* Verify the domain under your GitHub account → *Settings → Pages → Verified domains* to prevent takeover.

## Waitlist form

GitHub Pages has no backend. By default the form opens the visitor's email client addressed to
`hello@beaiexpert.com`. To collect signups directly, create a form endpoint (e.g. Formspree,
Basin, or a Google Apps Script) and set `FORM_ENDPOINT` in `assets/main.js`.
