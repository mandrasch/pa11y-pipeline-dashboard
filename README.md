# pa11y pipeline dashboard

Powered by [pa11y-ci](https://github.com/pa11y/pa11y-ci), [SvelteKit](https://kit.svelte.dev/) and GitHub actions.

Experimental project inspired by https://github.com/pa11y/pa11y-dashboard. Big kudos to the [pa11y](https://github.com/pa11y)-team for providing these helpful tools as open source! 👏

## Demo

![Screenshot of dashboard, 3 sites with multiple errors](.screenshot.jpg?raw=true)

https://mandrasch.github.io/pa11y-pipeline-dashboard/

## Generate reports

Go to GitHub actions &raquo; generate reports &raquo; start report generation with "run workflow".

## Local installation

- `npm install`
- Test report generation: `npx pa11y-ci`
- Develop frontend dashboard: `npm run dev -- -- open`

## TODOs

- [ ] `(npm ...) || true` is suboptimal, but otherwise exit code 2 will be sent?
  - https://github.com/pa11y/pa11y-ci/issues/94
  - [ ] Is pa11y better suited for our purposes? Exit code can be configured: https://www.npmjs.com/package/pa11y#exit-codes, but multiple URLs can't be imported via config?
- [ ] Use shiki for HTML syntax highlighting?
- [ ] JSON reporter to file with `fileName:'./static/` does not work, maybe because the working directory is not found correctly?

## How was this created?

```bash
npm create svelte@latest .
npm install --save-dev pa11y-ci
npm i --save-dev prettier-plugin-svelte prettier
npm i --save-dev sass svelte-preprocess @sveltejs/adapter-static
npm i @picocss/pico
```

### pa11y-ci config

## Troubleshooting

- timeout is important. if it is too short, it will fail without notice.

## Resources

- https://ashleemboyer.com/blog/how-i-added-a-pa11y-ci-github-action-to-my-next-js-site
- https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe - https://github.com/CivicActions/accessibility/blob/main/.github/workflows/pa11y.yml - - https://github.com/CivicActions/accessibility/blob/main/.pa11yci
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
