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

## Facebook setup 

### Step1: Setup facebook to be a facebook developer:

- Go to [Facebook dev console](https://developers.facebook.com/products/login/)
- Click Apps->Register as a Developer
- enter password
- accept policy
- send confirmation code to SMS
- once received enter code

### Step2: Create a new app on facebook console

- Click apps-> Create a new app
- add display name: Shoot
- deal with difficult catcha
- configure Advanced setup:
	- Native or desktop app? NO
	- Client OAuth Login YES
	- Embedded browser OAuth Login YES
    
### Step3: Configure Shoot app cordova client    

Open app.js and update `clientId` and `clientSecret` with you `App ID` and `App Secret` and in case of iOS change `fbYYY` to `fb<App ID>` to the <project-name>-Info.plist:

```
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

## Google setup (optional)
Here is the links and detailed setup instructions for Google Drive however as I noticed it is quite poorly documented for iOS app.

NOTES: This step is optional if your want to try the GoogleDrive app out of the box. The client id for 'GoogleDrive' has already been generated and [is available in the app](https://github.com/aerogear/aerogear-ios-cookbook/blob/1.6.x/GoogleDrive/GoogleDrive/AGViewController.m#L156). However if you want to create your own app, you will have to go through your provider setup instruction. Here's how to do it for Google Drive.

1. Have a Google account
2. Go to [Google cloud console](https://cloud.google.com/console#/project), create a new project
3. Go to __APIs & auth__ menu, then select __APIs__ and turn on __Drive API__
4. Always in __APIs & auth__ menu, select __Credentials__ and hit __create new client id__ button
Select iOS client and enter your bundle id.

NOTES:
Enter a correct bundle id as it will be use in URL schema to specify the callback URL.

Once completed you will have your information displayed as below:

![Google Cloud client registration](https://github.com/aerogear/aerogear-ios-cookbook/raw/master/Shoot/shoot_google_cloud_admin.png "Google Cloud client registration")

You get :

- Client Id
- Client Secret
- callback URL

### Install

Add these to the app.js file under google.

## Keycloak setup

You will need an instance of Keycloak running locally please refer to [aerogear-backend-cookbook shoot recipe](https://github.com/aerogear/aerogear-backend-cookbook/tree/master/Shoot).

### Install

Set the location of your keycloak running instance in app.js be sure it's reachable from you phone
