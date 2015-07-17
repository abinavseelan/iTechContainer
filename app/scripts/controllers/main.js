'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the itcApp
 angular.module('itcApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
 */


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
            console.log('icamehere');
            $location.path('#/recipient');
          }
        },
        error: function(user, error) {
          // The login failed. Check error to see why.
          $scope.errorMessage = error.message;
          console.log('error: ' + error.message);
        }
      });
    };
}]);
