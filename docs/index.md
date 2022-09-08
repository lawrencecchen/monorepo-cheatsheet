# TypeScript Monorepo Cheatsheet

Figuring out how to set up a monorepo with TypeScript is a pain. This is a cheatsheet to help you get started.

- for web apps
-

## Setup

- https://turborepo.org/docs/getting-started
- https://nx.dev/recipe/adding-to-monorepo

## Examples

### Turborepo

- https://github.com/vercel/turborepo/tree/main/examples/with-pnpm

## Folder structure

<!-- https://tree.nathanfriend.io/?s=(%27options!(%27fancy0~fullPath!false~trailingSlash0~rootDot0)~3(%273%27apps*s4%20%20ui*.json2pnpm-workspace.yaml%27)~version!%271%27)*4package0!true2%5Cn3source!4%2F2%014320* -->

## `tsconfig.json` good defaults

### `base.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Default",
  "compilerOptions": {
    "composite": false,
    "declaration": true,
    "declarationMap": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "inlineSources": false,
    "isolatedModules": true,
    "moduleResolution": "node",
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "preserveWatchOutput": true,
    "skipLibCheck": true,
    "strict": true
  },
  "exclude": ["node_modules"]
}
```

### `nextjs.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Next.js",
  "extends": "./base.json",
  "compilerOptions": {
    "allowJs": true,
    "declaration": false,
    "declarationMap": false,
    "incremental": true,
    "jsx": "preserve",
    "lib": ["dom", "dom.iterable", "esnext"],
    "module": "esnext",
    "noEmit": true,
    "resolveJsonModule": true,
    "strict": false,
    "target": "es5"
  },
  "include": ["src", "next-env.d.ts"],
  "exclude": ["node_modules"]
}
```

### `react-library.json`

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "React Library",
  "extends": "./base.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "lib": ["ES2015"],
    "module": "ESNext",
    "target": "es6"
  }
}
```

## importing p
