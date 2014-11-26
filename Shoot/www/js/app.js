// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    oauth2.add({
      name: 'gplus',
      settings: {
        base: "https://accounts.google.com",
        authzEndpoint: "o/oauth2/auth",
        redirectURL: "com.ionicframework.starter:/oauth2callback",
        accessTokenEndpoint: "o/oauth2/token",
        clientId: "517285908032-nnkcrot1727fmd738pug6clbqlgosffs.apps.googleusercontent.com",
        refreshTokenEndpoint: "o/oauth2/token",
        revokeTokenEndpoint: "rest/revoke",
        scopes: 'https://www.googleapis.com/auth/drive'
      }
    });
  });
})

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