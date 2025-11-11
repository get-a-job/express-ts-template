# Express TS Template

A simple template repo that is pre configured with:

- [x] ESM Modules
- [x] TS config
- [x] Node cli + types
- [x] Prisma and postgres docker-compose
- [ ] Express (typescript + esm) + types
- [ ] EJS, EJS Layout
- [ ] tailwind Frontend
- [ ] HTMX

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
