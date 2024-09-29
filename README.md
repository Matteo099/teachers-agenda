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