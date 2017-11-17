# Ecommerce React Native

The ideal starter kit / app script with all the needed UI elements alongwith MobX and NativeBase to build your iOS and Android e-commerce app like Mona / JackThreads / Canopy / Flipp

## Installation

### System Requirements:

- Globally installed node>= 6
- Globally installed npm>= 3

- Install packages for Full Version

```shell
cd App
npm install
or
yarn
```

- To simulate for iOS
    - Method One:
        - Run `npm start` in your terminal.
        - Scan the QR code in your Expo App.
    - Method Two:
        - Type `npm run ios` in your terminal.

- To simulate for Android
    - Method One:
        - Run `npm start` in your terminal.
        - Scan the QR code in your Expo App.
    - Method Two:
        - Make sure you have an Android emulator installed and running.
        - Type `npm run android` in your terminal.

## Start Building Your App

This App guides you throughout building your app, providing the steps and procedure to customize.

### How to add new component

- Create a new folder, say `newComponent` and place it under `/js/src` .
- Create a new file `index.js` , within this folder.
- Name the class same as that of folder name.

```js
class NewComponent extends Component {
    ...
}
```

### How to add new styleSheet

- Create a new file `styles.js` , place it under `/js/src/newComponent`.
- `import` newly created StyleSheet into the Component.

```js
import styles from './styles';
class NewComponent extends Component {
    ...
}
```

Happy coding!
