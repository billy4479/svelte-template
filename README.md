# Svelte Template

This is a template repo to bootstrap your Svelte project with some extra juicy stuff in it.

By default you have Typescript, PostCSS with Tailwind, ES-Lint (with the airbnb preset), Prettier, Babel (for Typescript and tests), Jest and Snowpack.

This is meant to be used with `pnpm` but you _should_ be able to use also `npm` or `yarn`.

## Get this template

You can just use the big green button "Use this template" or use `degit`

```bash
pnpx degit billy4479/svelte-template my-svelte-app
```

Once you have the files `cd` into the cloned directory and run

```bash
pnpm install

# To spin-up a dev server
pnpm run start

# To build for production
pnpm run build

# To run tests
pnpm test

```

### VSCode

If you use VSCode make sure to add this line to you `settings.json`

```json
"eslint.lintTask.enable": true
```
