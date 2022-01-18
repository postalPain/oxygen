# Floos #

## Description ##

React Native Stryber Template app

## Prerequisites ##

You need the following tools installed on your host machine:

- npm / node
- cocoapods (latest version)
- Xcode (latest version)
- Java (latest version)
- Android SDK

#### iOS ####

Go to Xcode -> Preferences -> Locations -> Command Line Tools and select latest Xcode version.

#### Android ####

Add next value to user/.bash_profile file

```shell script
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

Optional, if you want to overwrite JDK default location to Android JDK location
(if you want to run build not from Android Studio, but from React Native Cli, like "react-native run-android")
```shell script
export JAVA_HOME=$HOME/Applications/Android\ Studio.app/Contents/jre/Contents/Home
```


## Development ##

### How to initialize template ###

```shell script
PROJECT_NAME=[project name] PROJECT_DISPLAY_NAME=[project display name] yarn init:template
```

### How to debug on IOS device / emulator ###

Run the following command in the terminal

```shell script
yarn run ios
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

### Testing ###

linter

```shell script
yarn run lint
```

unit tests

```shell script
yarn run test
```

### App version ###

To change build version for Android -> android/app/src/build.gradle
```
versionCode 3
versionName "0.8.0"
```
To change build version for iOS -> ios/Quit4Good/info.plist
```
<key>CFBundleShortVersionString</key>
<string>0.8.0</string>
<key>CFBundleVersion</key>
<string>3</string>
```
where versionCode/CFBundleVersion = prevVersionCode + 1 and versionName/CFBundleShortVersionString depending on your needs (minor or major update)
