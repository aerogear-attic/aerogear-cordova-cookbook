Shoot 'n Share
==============
You want to shoot cool photos and share them with friends using GoogleDrive, Facebook or your own Keycloak server.
With ShootnShare you can take picture, browse your camera roll, pick a picture to share and share it!
Picture get uploaded to your GoogleDrive, keycloak and/or facebook

## Install

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cordova restore plugins --experimental
$ cordova platform add ios android
$ cordova prepare ios
$ open platforms/ios/Shoot.xcodeproj/
```

Then follow the directions printed to tweak the native projects to be able to use the oauth plugin. See details instruction in [aerogear-oauth2-cordova](https://github.com/aerogear/aerogear-oauth2-cordova/blob/master/README.md#workaround-for-ios).