// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // more info on how to change these have a look at: 
    //      https://github.com/aerogear/aerogear-oauth2-cordova/blob/master/README.md
    oauth2.addGoogle({
      name: 'gplus',
      settings: {
        //replace with your own if you want to...
        clientId: '241956090675-gkeh47arq23mdise57kf3abecte7i5km.apps.googleusercontent.com',
        scopes: 'https://www.googleapis.com/auth/drive'
      }
    });
    
    oauth2.addKeycloak({
      name: 'keycloak',
      settings: {
        base: '<location of keycloak server e.g. http://192.168.0.12:8080/auth>',
        //when you use the shoot and share backend these do not need to change
        clientId: 'shoot-third-party',
        realm: 'shoot-realm'
      }
    });
    
    oauth2.addFacebook({
      name: 'facebook',
      settings: {
        //On iOS, be sure to also update the <project_name>-Info.plist file with the clientId
        clientId: '<facebook App ID e.g. 1511044619160050>',
        clientSecret: '<facebook App Secret e.g. 3b08052d3d96e2120f2c53a36eebd02f>',
        scopes: 'photo_upload, publish_actions'
      }
    });
  });
})

.config([
    '$compileProvider',
    function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(x-wmapp0|\/\/\/):/);
    }
])

.config(function ($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('main', {
    url: "/main",
    templateUrl: "templates/tabs.html",
    controller: 'Controller'
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');

});