# Express TS Template

A simple template repo that is pre configured with:

- [x] ESM Modules
- [x] TypeScript config
- [x] Node cli + types
- [x] Prisma and postgres docker-compose
- [x] Express
- [x] Pino for logging
- [x] EJS, EJS Layout
- [x] tailwind
- [x] HTMX
- [x] AlpineJS
- [ ] Add tests
- [x] Add Dockerfile
- [x] Create GitHub template repo
- [x] Add GitHub actions
- [x] Build and Deploy locally
- [ ] Deploy locally with db
- [x] Build with Jenkins
- [ ] integration tests relying on DB
- [ ] Deploy to server
- [ ] Update readme
- [x] Add renovate

## ESM

Add the following to your `package.json`.

```json
  "type": "module",
```

## Ts config

- Add typescript dependency
- Add tsx dependency to compile typescript to js
- Add `tsconfig.json` to set project options

##  Node Cli + types

- Add scripts
- add dependencies

Add the following scripts

```json
    "cli:build": "tsc",
    "cli:start": "node dist/cli/index.js",
    "cli:dev": "tsx watch src/cli/index.ts",
```

Add the following dev dependencies

`npn i -D @types/node`

```json
    "@types/node": "^24.10.0",
```

## Setting up prisma from scratch

- Install the dependencies
- Add scripts to package.json
- Add docker compose
- Run `npx prisma init`
- Add env vars to .env file
- Install dotenv and dotenv-expand (so it can read nested env vars)
- Update prisma.config.ts get env vars using dotenv + expand
- Start postgres container
- Run npm run prisma:migrate

## Setting up Express with TypeScript

I'm following [this link](https://blog.logrocket.com/express-typescript-node/).

##  Pino

I got a config to add from chatgpt

## EJS

I followed chatgpt's instructions

## Tailwind

Tailwind can be setup by following the guide on the [tailwind site](https://tailwindcss.com/docs/installation/tailwind-cli)

As tailwind is built using the tailwind cli two tasks need to be added to our scripts.

We added a public folder so our static content can be saved there and copied from src to dist as part of the build process

The `dev:css` task continuously watches the files and regenerates the main.css file which is used in our `layout.ejs` file. We installed `concurrently` so that the `dev` task can watch the css while serving the index.ts file.

The `build:css` task generates the production minified version of our css this is also run when the `build` script is run so it can be used in any build processes.

##  Dockerfile

Add a `Dockerfile` that is used to build and run the application.

I updated the build script to copy the views and static files to the dist folder so the running application can see them.

## Alpine js and htmx

The minified versions of these can be included to our source code in the `public/vendors` folder. These can then be added to the layout file.

## Github actions
