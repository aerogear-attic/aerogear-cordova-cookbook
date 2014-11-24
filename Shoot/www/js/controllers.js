angular.module('starter.controllers', [])

.controller('Controller', function ($scope) {
  $scope.takePicture = function () {
    getPicture(Camera.PictureSourceType.CAMERA);
  };

  $scope.openLibrary = function () {
    getPicture(Camera.PictureSourceType.PHOTOLIBRARY);
  };

  $scope.upload = function (action) {
    switch(action) {
        case 'facebook':
        case 'gplus':
        case 'keycloak':
    }
  };

  function getPicture(sourceType) {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 512,
      targetHeight: 512,
      popoverOptions: CameraPopoverOptions
    });
  }

  function onSuccess(data) {
    console.log('success');
    $scope.image = 'data:image/jpeg;base64,' + data;
    $scope.$apply();
  }

  function onFail(error) {
    alert(error);
  }
});