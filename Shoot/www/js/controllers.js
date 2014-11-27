angular.module('starter.controllers', [])

.controller('Controller', function ($scope, file) {
  $scope.takePicture = function () {
    getPicture(Camera.PictureSourceType.CAMERA);
  };

  $scope.openLibrary = function () {
    getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
  };

  var url = {
    gplus: 'https://www.googleapis.com/upload/drive/v2/files',
    keycloak: 'http://192.168.0.12:8080/shoot/rest/photos'
  }
  
  $scope.upload = function (type) {
    if (type !== 'facebook') {
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
    } else {
      alert('Not yet supported');
    }
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