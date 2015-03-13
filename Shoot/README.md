# Shoot 'n Share
---------
Authors: Erik Jan de Wit (edewit)
Level: Advanced
Technologies: Cordova, iOS, Android
Summary: And example of interacting with several modern web services.
Target Product: -
Product Versions: -
Source: https://github.com/aerogear/aerogear-cordova-cookbook/tree/master/Shoot

## What is it?

You want to shoot cool photos and share them with friends using GoogleDrive, Facebook or your own Keycloak server. With ShootnShare you can take picture, browse your camera roll, pick a picture to share and share it! Picture get uploaded to your GoogleDrive, Keycloak and/or Facebook

## How do I run it?

### 0. System Requirements

* [Cordova 4.2](http://cordova.apache.org/)

For the complete instructions about how to setup Google, Facebook or Keycloak credentials, visit our [OAuth2 documentation guide](https://aerogear.org/docs/guides/security/oauth2-guide/#_before_you_get_started)

### 1. Application Setup

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cordova restore plugins --experimental
```

**Notes:** 
[Cordova restore](http://cordova.apache.org/news/2014/07/10/tools-release.html) is an experimental feature that allows to persist the currently added plugins to config.xml.

If you don't want to use ```cordova restore```, you have to add all plugins manually (it might be required if you want to test the latest version of oauth2 plugin for instance):

```bash
$ cordova plugin add org.apache.cordova.camera
$ cordova plugin add org.apache.cordova.file
$ cordova plugin add org.apache.cordova.file-transfer
$ cordova plugin add org.jboss.aerogear.cordova.oauth2
```

* Open `www/js/app.js` and update `clientId` and `clientSecret` with your `App ID` and `App Secret`

#### iOS setup

* Add iOS platform

```bash
$ cordova platform add ios
```

* Change `fbYYY` to `fb<App ID>` in the Shoot-Info.plist

```xml
<key>CFBundleURLTypes</key>
    <array>
        <dict>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>org.aerogear.Shoot</string>
                <string>fbYYY</string>
            </array>
        </dict>
    </array>
```

* Deploy on device:

```bash
$ cordova run ios --device
```

#### Android setup

* Add Android platform

```bash
$ cordova platform add android
```

* Deploy on device:

```bash
$ cordova run android --device
```