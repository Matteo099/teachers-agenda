# teachers-agenda

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Firebase Emultator integration

```
(optional)
$ npm i -g firebase-tools

$ firebase --version
13.20.1

$ firebase login

link...
Waiting for authentication...

+  Success! Logged in as matteo.romagnoli099@gmail.com


$ firebase init
> Are you ready to proceed? **Yes**
> Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to  
invert selection, and <enter> to proceed): **Firestore, Emulators**
> Please select an option: (Use arrow keys): **Use an existing project (teachers-agenda)**
> What file should be used for Firestore Rules? firestore.rules
> What file should be used for Firestore indexes? firestore.indexes.json
> Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection, 
and <enter> to proceed): **Authentication Emulator, Firestore Emulator**
> Which port do you want to use for the auth emulator? **9099**
> Which port do you want to use for the firestore emulator? **8080**
> Would you like to enable the Emulator UI? **Y**
> Which port do you want to use for the Emulator UI (leave empty to use any available port)? **Empty**
> Would you like to download the emulators now? **Y**

$ firebase emulators:start
```


Create .env file on root directory with this content:

```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_SIMULATOR=true
```

where VITE_FIREBASE_API_KEY is something like `ABcdEfgHDSdfGGFDG_VerTd1213IFgI__assSDFjs3`


### GitHub Pages and releases

Deployment is managed by GitHub Actions. Do not commit `dist` and do not push the
`gh-pages` branch manually.

1. Use Conventional Commits, for example:

    ```sh
    git commit -m "feat(calendar): add irregular lesson dates"
    git commit -m "fix(salary): exclude recovery-only days"
    ```

2. Open a pull request to `main`. CI validates commit messages, types, core tests,
   and the production build.

3. Merge the pull request. The release workflow:
   - calculates the next semantic version;
   - creates the Git tag and GitHub Release;
   - builds `dist`;
   - deploys the artifact to GitHub Pages.

Release rules:

- `fix:` creates a patch release;
- `feat:` creates a minor release;
- `BREAKING CHANGE:` or `type!:` creates a major release;
- `docs:`, `test:`, `chore:` and `ci:` do not create a release by default.

Before the first automated deployment, set repository **Settings → Pages → Build
and deployment → Source** to **GitHub Actions**.

### git utils

- Delete useless branches:

    ``` sh
    git fetch --prune
    ```

- Delete local branch
    
    ``` sh
    git branch -D db-auth-based-on-doc-key
    ```

- List local branches
    
    ``` sh
    git branch --list
    ```

# PWA Asset generator

To create the assets, install assets-generator:

``` sh
npm install -D @vite-pwa/assets-generator
```

Issue the command:

``` sh
./generate-assets.sh public/logo.jpeg
```

where public/logo.jpeg is the source image.

Finally, update the images in the folder public/img/icons.

# Test

To run the test use the command

``` sh
npm run test:full
```

If it does not work open 2 console in the root project and issue:

- on the first terminal:
    ``` sh
    npm run test:firebase
    ```

- on the second terminal:
    ``` sh
    npm run test:integration
    ```
