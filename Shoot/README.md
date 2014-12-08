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
$ open platforms/ios/HelloCordova.xcodeproj/
```

Then follow the directions printed to tweak the native projects to be able to use the oauth plugin. See details instruction in [aerogear-oauth2-cordova](https://github.com/aerogear/aerogear-oauth2-cordova/blob/master/README.md#workaround-for-ios).

## Configuration

### iOS

For our OAuth2 plugin we use external browser approach, in order to re-enter the app you need to provide a URI schema. This is called the ```redirect_uri```. By convention Google uses your iOS bundle. Facebook uses as ```redirect_uri``` 2 letters ```fb``` followed by the ```client_id```. As the ```client_id``` is not in your config.xml, once the project is deployed you will have to go to [project_name]-info.plist and modify it to change fbYYY where YYY is your facebook ```client_id```. 

![redirect_uri](ios_step_1.png "ios facebook configuration")