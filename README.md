# Floos #

## Description ##

Floos - Early Wage Access

## Run locally on emulator ##

`npm run ios`
`npm run android`

## Bitrise Builds ##

https://app.bitrise.io/app/ec5e5ff2203dd921#

## Testing ##

### e2e ###

Install applesimutils

```shell script
brew tap wix/brew
brew install applesimutils
```

Run tests
`npm run e2e:ios`

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

#### Xcode command line build ####
- To make an iOS build: xcodebuild -workspace ios/Floos.xcworkspace -configuration release -scheme Floos -sdk iphonesimulator -derivedDataPath ios/build
- To get list of simulators: xcrun simctl list
- To enable simulator: /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/Contents/MacOS/Simulator -CurrentDeviceUDID <DEVICE-ID or Booted>
- To install a build from build folder: xcrun simctl install <DEVICE-ID or Booted> <ios/build/Build/Products/Release-iphonesimulator/Floos.app>
- To launch a build: xcrun simctl launch <YOUR-DEVICE-ID or Booter> com.qstudio.floos
