'use strict';

angular.module('itcApp')
.controller('MainCtrl', ['$scope', '$location', function($scope, $location){
    
    $scope.errorMessage = '';
    Parse.initialize('WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv', 'BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd');

    var User = Parse.Object.extend('Users');

    $scope.clearData = function(){
      $scope.username = '';
      $scope.password = '';
      $scope.errorMessage = '';
    };

    $scope.authUser = function(){

      Parse.User.logIn($scope.username, $scope.password, {
        success: function(user) {
          // Do stuff after successful login.
          console.log('success!');
          var un = user.get('username');
          console.log(un);
          if (un==='johndoe') {
              $location.path('/recipient');            
          }
          else if(un==='simulator')
          {
              $location.path('/simulation');
          }
          $scope.$apply();
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          $scope.errorMessage = error.message;
          console.log('error: ' + error.message);
        }
      });
    };
}]);
