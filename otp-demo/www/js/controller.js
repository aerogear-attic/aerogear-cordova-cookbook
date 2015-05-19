angular.module('starter.controllers', [])

  .controller('controller', function ($scope, $interval) {
    var totp = null;

    var resetCounter = function () {
      $scope.time = 100;
    };
  
    var build = function () {
      resetCounter();
      totp.generateOTP(function (otp) {
        $scope.otp = otp;
      });
    };

    var startCounter = function () {
      $interval(function () {
        if ($scope.time <= 0) {
          build();
        } else {
          $scope.time -= 3.33;
        }
      }, 1000);
    };

    ionic.Platform.ready(function () {
      totp = new AeroGear.Totp();
      totp.readSecret(function (result) {
        if (result !== null) {
          totp = new AeroGear.Totp(result);
          build();
          startCounter();
        }
      });
    });

    $scope.add = function () {
      totp.scanSecret(function (secret) {
        totp = new AeroGear.Totp(secret);
        totp.storeSecret(secret);
        build();
        startCounter();
      });
    };
  });