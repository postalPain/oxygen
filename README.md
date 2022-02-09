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

### iOS ###

Open the Xcode, go to Preferences -> Locations -> Command Line Tools and select the latest Xcode version.

#### Mac with M1 chip ####

- Go to Finder -> Application -> Open context menu for Xcode -> Get info -> Select "Open using Rosetta"
- Open the project with Xcode, in the left menu (project navigator) click on the project, then click on the target you need and go to "Build settings". Find "Excluded architectures" -> "Debug" -> "Any iOS Simulator SDK" and add "arm64" to the list. Repeat the instructions for the "Release" as well.

### Android ###

Add next variables to user/.zshrc (or ./bash_profile) file

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
export JAVA_HOME=/Applications/Android\ Studio.app/Contents/jre/Contents/Home
```


## Development ##

### How to initialize template ###

```shell script
PROJECT_NAME=[project name] PROJECT_DISPLAY_NAME=[project display name] npm run init:template
```

### How to debug on IOS device / emulator ###

Run the following command in the terminal

```shell script
npm run ios
```

### How to debug on Android device / emulator ###

Run the following command in the terminal

```shell script
npm run android
```

### How to debug on IOS device / simulator ###

Run the following command in the terminal

```shell script
npm run ios
```

### Testing ###

linter

```shell script
npm run lint
```

unit tests

```shell script
npm run test
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

### Troubleshooting ###

#### Mac with M1 and Android ####
If you open the Android Studio and during the initialisation you see the next error:
```shell script
Cannot run program "node": error=2, No such file or directory
```
open the Android Studio from terminal (where node is accessible) with next command. It should create
a gradle default configuration, then you will be able to run the project from the Android Studio
```shell script
open -a /Applications/Android\ Studio.app
```

#### Xcode build ####
- To get list of simulators: xcrun simctl list
- To enable simulator: /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/Contents/MacOS/Simulator -CurrentDeviceUDID <DEVICE-ID or Booted>
- To install a build from build folder: xcrun simctl install <DEVICE-ID or Booter> <ios/build/Build/Products/Release-iphonesimulator/Floos.app>
- To launch a build: xcrun simctl launch <YOUR-DEVICE-ID or Booter> com.qstudio.floos
