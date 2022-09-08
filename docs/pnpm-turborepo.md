# pnpm + Turborepo

https://github.com/vercel/turborepo/tree/main/examples/with-pnpm

## `.pnpm-workspace.yaml`

```
packages:
  - "apps/*"
  - "packages/*"
```

## `package.json` in `packages/` directory

```json
{
  ...
  "name": "ui",
  "devDependencies": {
    "eslint-config-custom": "workspace:*",
    "tsconfig": "workspace:*",
  },
  ...
}
```

## `package.json` in `apps/` directory

```json
{
  ...
  "name": "ui",
  "dependencies": {
    "ui": "workspace:*"
  },
  "devDependencies": {
    "eslint-config-custom": "workspace:*",
    "tsconfig": "workspace:*",
  },
  ...
}
```
