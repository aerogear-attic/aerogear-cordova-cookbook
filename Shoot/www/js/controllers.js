angular.module('starter.controllers', [])

.controller('Controller', function ($scope, $ionicPlatform, file) {
  $scope.takePicture = function () {
    getPicture(Camera.PictureSourceType.CAMERA);
  };
  
  $ionicPlatform.ready(function () {
    console.log('starting camera plugin');
    $scope.takePicture();
  });

  var url = {
    gplus: 'https://www.googleapis.com/upload/drive/v2/files',
    keycloak: 'http://192.168.0.12:8080/shoot/rest/photos',
    facebook: 'https://graph.facebook.com/me/photos'
  }

  $scope.upload = function (type) {
    oauth2[type].requestAccess()
      .then(function (token) {
        file.put(url[type], $scope.image, token)
          .then(function () {
            alert('Upload complete');
          });
      }, function (err) {
        console.log(err);
        alert(err.error);
      });
  };

  function getPicture(sourceType) {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URL,
      sourceType: sourceType,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 512,
      targetHeight: 512,
      popoverOptions: CameraPopoverOptions
    });
  }

  function onSuccess(image) {
    console.log('success');
    $scope.image = image;
    $scope.$apply();
  }

  function onFail(error) {
    alert(error);
  }
});