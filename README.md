AeroDoc Cordova
===============

## Install
Clone this repository and do the follwoing:

1. Add cordova platforms
2. Add AeroGear Unified PushPlugin
3. Add the aerogear-aerodoc-web to the www directory

Example:

		cordova platform add android
		cordova platform add ios
		cordova plugin add org.jboss.aerogear.cordova.push

		rm -rf www
		git clone https://github.com/aerogear/aerogear-aerodoc-web www

## Prolog
Now all that there is left to do is setup the `varaintId` and `secret` in the `app.js` located in the scripts for each platform be sure to edit the one in merges!