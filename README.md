# SEN10 Module 13: Lint → Test → Deploy

A static HTML/CSS/JS site hosted on GitHub Pages. A GitHub Actions workflow lints the code, runs Jest tests, and deploys **only if both lint and test pass**.

**Live site:** https://aromorguy.github.io/SEN10-Module-13/

## The page-load function

`buildVisitGreeting(date)` in [`script.js`](script.js) returns a time-of-day greeting plus a countdown to the weekend, e.g. `Good morning! 3 days until the weekend.` A `DOMContentLoaded` listener calls it when the page loads and writes the result into `#greeting`.

## Pipeline ([`.github/workflows/ci-deploy.yml`](.github/workflows/ci-deploy.yml))

```
lint  ──►  test (needs: lint)  ──►  deploy (needs: [lint, test])
```

| Job    | What it does                                             |
| ------ | -------------------------------------------------------- |
| lint   | `npm run lint`: ESLint for JS, HTMLHint for HTML         |
| test   | `npm test`: Jest tests in `__tests__/script.test.js`     |
| deploy | Uploads `index.html`, `style.css`, `script.js` to Pages  |

## Failing vs passing test demo

1. **Failing run:** a test expected `"4 days until the weekend"` for a Monday (the right answer is 5). The `test` job failed and `deploy` was **skipped**.
2. **Passing run:** the expectation was corrected. All three jobs passed and the site deployed.

See the **Actions** tab for both runs.

## Run locally

```bash
npm ci
npm run lint
npm test
```
