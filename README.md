# [SDH Veselice](http://sdhveselice.cz) official website

[![cypress](https://github.com/kotrzina/sdhveselice/actions/workflows/cypress.yml/badge.svg)](https://github.com/kotrzina/sdhveselice/actions/workflows/cypress.yml)
[![WTFPL](http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl-badge-4.png)](http://www.wtfpl.net/)

Application uses [Next.js](https://nextjs.org/) with Static Site Generation (SSG).

## Develop

Start the development server and open your browser at `http://localhost:3000`:

```
npm run dev
```

## Production

Production build generates a fully static website. All pages are rendered at build time.

```
npm run build
```

The complete static site is output to the `out` directory. To serve it locally:

```
npm run start
```

## Tests

End-to-end tests use [Cypress](https://www.cypress.io/):

```
npm test
```

## Deploy

Application (branch `main`) is automatically deployed to Cloudflare pages. The latest main build is located
here [sdhveselice.pages.dev](https://sdhveselice.pages.dev)

Production uses simple DNS CNAME record.

## Useful commands

#### Convert image to webp

```bash
# apt install webp
# brew install webp
cwebp -q 75 -resize 1280 0 input.jpg -o output.webp

# crop image 16:9
magick input.jpeg -gravity center -crop 16:9 +repage output.jpeg
```
