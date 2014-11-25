angular.module('starter.services', [])

/**
 * File upload service
 */
.factory('file', function($q) {
  return {
    put: function (url, photo, token) {
      var deferred = $q.defer();

      var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);

        deferred.resolve(r);
      }.bind(this);

      var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        deferred.reject(error);
      };

      var options = new FileUploadOptions();
      options.fileKey = "file";
      options.fileName = photo.substr(photo.lastIndexOf('/') + 1);
      options.mimeType = "image/jpeg";

      var indexOfQuestionMark = options.fileName.indexOf('?');

      options.fileName = indexOfQuestionMark ? options.fileName.slice(indexOfQuestionMark + 1) + '.jpg' : options.fileName;

      options.headers = {
        'Authorization': 'Bearer ' + token
      };

      var ft = new FileTransfer();
      ft.upload(photo, url, win, fail, options);
      return deferred.promise;
    }    
  }
});
