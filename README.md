# Personal site / project showcase

A static, single-page site to show off your projects. No build step, no dependencies —
just HTML, CSS, and a tiny bit of JavaScript. Hosted free on GitHub Pages.

## Files
- `index.html` — page content (hero, project cards, about)
- `style.css` — styling and the light/dark theme
- `script.js` — theme toggle + footer year

## How to customize
1. **Find-and-replace `YOUR_USERNAME`** with your GitHub username (appears in several links).
2. Replace **Your Name**, the tagline, and the About paragraph.
3. Update the social links (GitHub, LinkedIn, email) in the hero.
4. For each project: edit a `<article class="card">` block in `index.html`.
   Copy a whole block to add a project; delete one to remove it.
5. Default theme is dark — change `<html lang="en" data-theme="dark">` to
   `data-theme="light"` in `index.html` if you'd rather default to light.

## Publish to GitHub Pages (recommended: user site)
A user site lives at `https://YOUR_USERNAME.github.io`.

1. Create a repo named exactly **`YOUR_USERNAME.github.io`** on GitHub.
2. Push these files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Add personal site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```
3. In the repo: **Settings → Pages → Build and deployment**.
   Set **Source: Deploy from a branch**, **Branch: `main` / `root`**, then save.
4. Wait ~1 minute, then visit `https://YOUR_USERNAME.github.io`.

### Alternative: project site
Put this in any repo, enable Pages the same way, and it'll be served at
`https://YOUR_USERNAME.github.io/REPO_NAME/`.

## Preview locally
Just open `index.html` in a browser, or run a local server:
```bash
python3 -m http.server 8000
# then open http://localhost:8000
```
