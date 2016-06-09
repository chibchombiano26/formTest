/*global  angular*/

angular.module('nsuForm', ['schemaForm', 'mgcrea.ngStrap'])
.service('nsuService', function($q, $http) {
  
  var directive = {}, baseUrl;
  baseUrl = 'http://localhost:8540';
  
  directive.post = function(data){
      var deferred = $q.defer();
      
      $http.post(baseUrl + '/lms/leadinput/Post', data).then(
       function(result){
          deferred.resolve(result);
      }, function error(err){
          deferred.resolve(err);
      })
      
      return deferred.promise;
      
  }
  
  return directive;
  
});