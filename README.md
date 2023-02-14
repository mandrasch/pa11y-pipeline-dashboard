# pa11y pipeline dashboard

Experimental project, inspired by https://github.com/pa11y/pa11y-dashboard. Powered by [pa11y-ci](https://github.com/pa11y/pa11y-ci), [SvelteKit](https://kit.svelte.dev/) and GitHub actions.

## Demo

## Generate reports

Go to GitHub actions start report generation with "run workflow".

## Local installation

- `npm install`
- Test report generation: `npm run pa11y-generate-reports`
- Develop frontend dashboard: `npm run dev -- -- open`

## TODOs

- [ ] Use shiki for HTML syntax highlighting?

## How was this created?

```bash
npm create svelte@latest .
npm install --save-dev pa11y-ci
npm i --save-dev prettier-plugin-svelte prettier
npm i --save-dev sass svelte-preprocess @sveltejs/adapter-static
npm i @picocss/pico
```

<hr>

Original docs:

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
