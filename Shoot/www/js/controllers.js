angular.module('starter.controllers', [])

.controller('Controller', function ($scope, file) {
  $scope.takePicture = function () {
    getPicture(Camera.PictureSourceType.CAMERA);
  };

  $scope.openLibrary = function () {
    getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
  };

  $scope.upload = function (type) {
    if (type === 'gplus') {
      oauth2.gplus.requestAccess()
        .then(function (token) {
          file.put('https://www.googleapis.com/upload/drive/v2/files', $scope.image, token)
            .then(function () {
              alert('Upload complete');
            });
        }, function (error) {
          alert(error);
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