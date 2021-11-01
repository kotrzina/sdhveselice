# [SDH Veselice](http://sdhveselice.cz) official website

[![cypress](https://github.com/kotrzina/sdhveselice/actions/workflows/cypress.yml/badge.svg)](https://github.com/kotrzina/sdhveselice/actions/workflows/cypress.yml)

Application is written using [Next.js](https://nextjs.org/) project.

## Develop

Development version runs on port `3000`. Just run following command and open your browser: `http://localhost:3000`.

```
yarn run dev
```

## Production

Production build uses Next-gen Static Site Generation (SSG). It means that all pages are rendered build time.

```
yarn run build
```

Then you can find complete static website in `out` directory.

## Deploy

Application (branch `main`) is automatically deployed to Cloudflare pages. The latest main build is located
here [sdhveselice.pages.dev](https://sdhveselice.pages.dev)

Production uses simple DNS CNAME record.
