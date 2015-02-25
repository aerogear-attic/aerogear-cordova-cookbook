AeroGear Cordova Cookbook
=========================

The AeroGear Cordova cookbook is a list of recipes to quick start your AeroGear Cordova experience.

Each recipe is a complete app. The goal of the recipes is to show you how easily you can use Cordova AeroGear plugins. The app features are very lean and most of UI is kept to basics in order to focus on AeroGear plugin usage.

|                 | Project Info  |
| --------------- | ------------- |
| License:        | Apache License, Version 2.0  |
| Build:          | Cordova  |
| Documentation:  | https://aerogear.org/docs/specs/aerogear-cordova/  |
| Issue tracker:  | https://issues.jboss.org/browse/AGCORDOVA  |
| Mailing lists:  | [aerogear-users](http://aerogear-users.1116366.n5.nabble.com/) ([subscribe](https://lists.jboss.org/mailman/listinfo/aerogear-users))  |
|                 | [aerogear-dev](http://aerogear-dev.1069024.n5.nabble.com/) ([subscribe](https://lists.jboss.org/mailman/listinfo/aerogear-dev))  |

## Table of content

| Recipe 	| Core 	| Push 	| Security 	|
| ------------- |:-------------:| :-----:|:-----:|
| [Shoot'n Share](Shoot/README.md): Upload file to OAuth2 GoogleDrive | **File Upload** | - | OAuth2 |
| [AeroDoc](./aerodoc-cordova): Full exemple on how to register, received notification with Java backend | Store, Pipe | **Push** | Login |
| [HelloWorld](https://github.com/aerogear/aerogear-push-helloworld/tree/master/cordova): Simple demo of Push registration and notification handles with framework as dependencies | - | **Push** | - |
| [PushQuickstarts](https://github.com/aerogear/aerogear-push-quickstarts/tree/master/client/contacts-mobile-cordova): Two complete demos (one using jqm and another with Ionic) of Push notification with server side using UnifiedPush server | - | **Push** | - |

Most of the recipes illustrate one main topic which is listed in bold in the table.

AeroGear features can be splitted into three main topics:

* AeroGear Core: Store, Pipe, Paging, File upload etc...
* AeroGear Push: APN/GCM push notification, SimplePush
* AeroGear Security

For more details, please visit on [web site](http://aerogear.org/).

Some of the demos listed below are hold in separate repo, but as they follow the same philosophy (illustrate AeroGear libraries usage) we put a placeholder in the recipe cookbook for completeness. AeroDoc, HelloWorld, PushDemo, Push-Quickstarts have been added as git submodule, to fetch them:

    $ git submodule init

    $ git submodule update

## Building and installing each app

Use cordova cli:

- to add platform

		cordova platform add android
		cordova platform add ios

- to add plugin (if needed)

		cordova plugin add org.jboss.aerogear.cordova.push

- to copy www content (if needed)

		mv www/config.xml .
		rm -rf www
		git clone https://github.com/aerogear/aerogear-aerodoc-web www
		mv config.xml www


More specific build instruction will be in each README project.

## Documentation

For more details about the current release, please consult [our documentation](https://aerogear.org/docs/specs/aerogear-cordova/).

## Development

If you would like to help develop AeroGear you can join our [developer's mailing list](https://lists.jboss.org/mailman/listinfo/aerogear-dev), join #aerogear on Freenode, or shout at us on Twitter @aerogears.

Also takes some time and skim the [contributor guide](http://aerogear.org/docs/guides/Contributing/)

## Questions?

Join our [user mailing list](https://lists.jboss.org/mailman/listinfo/aerogear-users) for any questions or help! We really hope you enjoy app development with AeroGear!

## Found a bug?

If you found a bug please create a ticket for us on [Jira](https://issues.jboss.org/browse/AGCORDOVA) with some steps to reproduce it.
