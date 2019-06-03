Showcase of React Native modal behaviour inconsistency between iOS and Android.

Project is using Yarn but NPM works as well.

First video is showing how it works with StatusBar translucent={true} <br/>
https://vimeo.com/339975862

Second video is showing how it works with StatusBar translucent={false} <br/>
https://vimeo.com/339976598

To reproduce: 
``` javascript
yarn install
yarn start
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