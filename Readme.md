Showcase of React Native modal behaviour inconsistency between iOS and Android.

To reproduce: 
``` javascript
yarn install
react-native run-ios
```
Open modal see the text positioning
Edit App.tsx on line 41 or 42, switching translucent from `true` to `false
Open modal see the text positioning

Open app on android emulator/device assuming you have it running/connected
``` javascript
react-native run-android
```

Open modal see the text positioning
Edit App.tsx on line 41 or 42, switching translucent from `true` to `false
Open modal see the text positioning