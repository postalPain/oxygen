# Floos React Native App project #

## Description ##

React Native project for the Floos app

## Development ##

### How to install ###

```shell script
yarn install && cd ios && pod install
```

### How to debug on Android device / emulator ###

Run the following command in the terminal

```shell script
yarn run android
```

### How to debug on IOS device / simulator ###

Run the following command in the terminal

```shell script
yarn run ios
```

### Git flow ###

Because of Stryber git flow, master branch should be used for staging and production environments.

### How to debug Firebase events on device ###
#### iOS ####
Change project scheme to FirebaseDebug. Run application on the device.
#### Android ####
Attach device. Install the application. Run in terminal:
```
yarn run firebase:setdebug:android
```
To disable debugging run:
```
yarn run firebase:unsetdebug:android
```
#### Where to check logging events ####
Firebase console -> Analytics -> DebugView

### Testing ###

#### linter ####

```shell script
yarn run lint
```

#### unit tests ####
we should cover all utils, sagas, reducers with unit tests

```shell script
yarn run test
```

#### e2e tests ####
we should cover main UI with e2e tests

```shell script
yarn run e2e:ios
```

### Github-actions CI ###

Every PR runs github-actions CI, it runs linter check -> unit tests -> e2e tests. If something fails you will receive an email with error message.

### Bitrise CD ###

Bitrise executes ./build-preparation.js file that is located in the root of the project when it builds dev/stage/prod builds.
Look in it if you want to know what happens before Bitrise creates a new build.

##### Dev #####

Every PR to dev branch will run Bitrise CD, it will create builds for iOS and Android.

##### Staging #####

If you need to create staging build go to Bitrise admin panel https://app.bitrise.io/app/{appId}#/builds and create build manually,
press "Start/Schedule a Build", set master branch and choose build-staging Workflow.

##### Production #####

If you need to create production build and upload them to App Store and Google Store go to Bitrise admin panel https://app.bitrise.io/app/{appId}#/builds and create build manually,
press "Start/Schedule a Build", set master branch and choose deploy-release Workflow.

### App version ###

To change build version for Android -> android/app/build.gradle
```
versionCode 3
versionName "0.8.0"
```
To change build version for iOS -> ios/Floos/info.plist
```
<key>CFBundleShortVersionString</key>
<string>0.8.0</string>
<key>CFBundleVersion</key>
<string>3</string>
```
where versionCode/CFBundleVersion = prevVersionCode + 1 and versionName/CFBundleShortVersionString depending on your needs (minor or major update)

If you need to upload new prod build just for testing (not for uploading to AppStore or GoogleStore) than update only versionCode for iOS and CFBundleVersion for android and do not update versionName/CFBundleShortVersionString variables.
