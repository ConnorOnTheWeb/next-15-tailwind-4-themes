This boiler provides nothing but a Next 15 web app, with Tailwind 4 ready to go, capable of detecting the user's light/dark mode and the logic to declare/ select/ switch themes.

Elements will respond to Tailwind's `dark:` class prefix while in dark mode.

Feel free to start your theme-capable project from here. I'll keep this repo as a boilerplate for all my NextJS builds until Tailwind 4 leaves beta.

Special thanks to Fin for writing [Implementing Dark Mode and Theme Switching using Tailwind v4 and Next.js](https://www.thingsaboutweb.dev/en/posts/dark-mode-with-tailwind-v4-nextjs), just needed to tweak a few things for this to work.

--

## Next 15 Tailwind 4 Boilerplate

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

--

## From clone

Start by cloning this repo...

```bash
npm i
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

--

## From scratch

Spin up a Next 15 instance. Press `enter` through all options. Use the `app directory` and `src` folder.

```bash
npx create-next-app@latest
```

Install Tailwind 4 (currently beta), Tailwind's postcss plugin, and next-themes

```bash
npm install tailwindcss@next @tailwindcss/postcss@next
npm install next-themes
```

Add this file from this repo...

```bash
src/components/theme-select.jsx
```

Modify these files to match this repo...

```bash
postcss.config.mjs
src/app/globals.css
src/app/layout.tsx
```

Start the development server...

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.