# BeAIExpert.com

**BeAIExpert** is a free AI education site for everyone: in-depth articles on AI fundamentals, the AI tech stack and AI development.

It is a dependency-free static site (HTML/CSS/JS), deployed to **GitHub Pages** on the custom domain `beaiexpert.com`.

## Structure

```
index.html          Home page
articles/index.html Article listing (with category filter)
articles/*.html     Individual articles
404.html            Not-found page
assets/styles.css   Styles (light + dark mode, article typography)
assets/main.js      Mobile nav, scroll reveal, filters, reading progress, copy buttons
about.html          About page (organization info for search and AI engines)
sitemap.xml, robots.txt, llms.txt  Search engine and AI crawler indexing
assets/og/          Social preview images (1200×630)
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

## Adding a new article

1. Copy an existing file in `articles/` (e.g. `how-llms-work.html`) and replace the title, description, canonical URL, tag, byline date and body — including the Open Graph/Twitter tags and the JSON-LD block in `<head>` (headline, description, URL, image, dates).
   Add a 1200×630 preview image at `assets/og/<slug>.png`.
2. Add a card for it to `articles/index.html` (set `data-category` to `fundamentals`, `tech-stack` or `development`) and, if it's new, to the "Latest articles" section of `index.html`.
3. Add its URL (with `lastmod`) to `sitemap.xml`, and a line for it in `llms.txt`.
