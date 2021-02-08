# Svelte Template

This is a template repo to bootstrap your Svelte project with some extra juicy stuff in it.

By default you have Typescript, ES-Lint (with the airbnb preset), Prettier, Babel (for Typescript and tests), Jest and Snowpack.

This is meant to be used with `yarn` but you _should_ be able to use also `npm`.

## Get this template

You can just use the big green button "Use this template" or use `degit`

```bash
npx degit billy4479/svelte-template my-svelte-app
```

Once you have the files `cd` into the cloned directory and run

```bash
yarn

# To spin-up a dev server
yarn start

# To build for production
yarn build

# To run tests
yarn test

```

### VSCode

If you use VSCode make sure to add this line to you `settings.json`
```json
"eslint.lintTask.enable": true
```
