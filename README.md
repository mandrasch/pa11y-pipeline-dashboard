# pa11y pipeline dashboard

Run automated accessibility tests in GitHub actions, no extra server needed.

Powered by [SvelteKit](https://kit.svelte.dev/), [pico.css](https://picocss.com/), [pa11y-ci](https://github.com/pa11y/pa11y-ci) and GitHub actions.

Experimental project inspired by https://github.com/pa11y/pa11y-dashboard. 

Big kudos to the [pa11y](https://github.com/pa11y)-team for providing these helpful tools as open source! 👏 👏 👏 

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

- [ ] axe + htmlcs will lead to duplicates? how to present this better? what is the default?
- [ ] Update to WCAG 2.1 AA possible?
- [ ] `(npm ...) || true` is suboptimal, but otherwise exit code 2 will be sent?
  - https://github.com/pa11y/pa11y-ci/issues/94
  - [ ] Is pa11y better suited for our purposes? Exit code can be configured: https://www.npmjs.com/package/pa11y#exit-codes, but multiple URLs can't be imported via config?
- [ ] Use shiki for HTML syntax highlighting?

## How was this created?

```bash
npm create svelte@latest .
npm install --save-dev pa11y-ci
npm i --save-dev prettier-plugin-svelte prettier
npm i --save-dev sass svelte-preprocess @sveltejs/adapter-static
npm i @picocss/pico
```

### pa11y-ci config

See `.pa11yci`.

## Troubleshooting

- Timeout is important. If it is too short, pa11y-ci will fail without notice.

## Resources

- https://www.craigabbott.co.uk/blog/axe-core-vs-pa11y/
- https://ashleemboyer.com/blog/how-i-added-a-pa11y-ci-github-action-to-my-next-js-site
- https://accessibility.civicactions.com/posts/automated-accessibility-testing-leveraging-github-actions-and-pa11y-ci-with-axe
- https://github.com/CivicActions/accessibility/blob/main/.github/workflows/pa11y.yml
- https://github.com/CivicActions/accessibility/blob/main/.pa11yci

<hr>

## SvelteKit docs

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
