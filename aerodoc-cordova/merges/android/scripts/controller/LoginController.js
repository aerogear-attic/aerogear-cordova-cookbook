/*
 * JBoss, Home of Professional Open Source
 * Copyright Red Hat, Inc., and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

function LoginController($scope, $routeParams, $location,$rootScope, dataService, notifierService) {

  var restAuth = dataService.restAuth;

  $scope.login = function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("access");
    var user = $scope.user;
    restAuth.login(user, {
      contentType: "application/json",
      success : function(data) {
        var role = $.inArray("admin", data.roles) >= 0 ? 1 : 0;
        sessionStorage.setItem("username", data.loginName);
        sessionStorage.setItem("access", role);
        setInterval(function() {
          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (pos) {
              var coordinates = pos.coords;
              data.latitude = coordinates.latitude;
              data.longitude = coordinates.longitude;
              dataService.saleAgentPipe.save(data);
            });
          }
        }, 30000);

        var config = angular.extend(aeroConfig, {
          alias: data.loginName,
          categories: ['lead']
        });
        push.register(angular.element($('.topcoat-notification')).scope().onNotification,
          function() {
            console.log('registration successful');
          },
          function(error) {
            console.log('registration failed because of ' + error);
          }, config);
        $location.path('/Leads');
        $scope.$apply();


      },
      error : function(data) {

      }
    });
  };

  $scope.logout = function() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("access");
    var user = $scope.user;
    restAuth.logout();
  };

  $scope.isAdmin = function() {
    return sessionStorage.getItem("access") == 1;
  };

  $scope.isLoggedIn = function() {
    return sessionStorage.getItem("username") != undefined;
  };
};