Showcase of React Native modal behaviour inconsistency between iOS and Android.

Project is using Yarn but NPM works as well.

First video is showing how it works with StatusBar translucent={true} <br/>
https://vimeo.com/339975862

Second video is showing how it works with StatusBar translucent={false} <br/>
https://vimeo.com/339976598

To reproduce:

```javascript
yarn install
yarn start
react-native run-ios
```

Notice text positioning, proceed by pressing on `Press me to open the modal` and notice text positioning <br/>
Edit App.tsx on line 41 or 42, switching translucent from `true` to `false` <br/>
Refresh the app and try again! <br/>
On `iOS` translucent has no effect because there is no StatusBar.translucent property<br/>

Now run app on android emulator/device assuming you have it running/connected:

```javascript
react-native run-android
```

Notice text positioning, proceed by pressing on `Press me to open the modal` and notice text positioning <br/>
Also you will notice icon color change when translucent is set to `false` <br/>
Edit App.tsx on line 41 or 42, switching translucent from `false` to `true` <br/>
Refresh the app and try again. This is where you will see the text positioning issue.
