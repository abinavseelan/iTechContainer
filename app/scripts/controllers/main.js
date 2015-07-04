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
.controller('MainCtrl', ['$scope', function($scope){
    

    Parse.initialize("WSpkgtQhqwNA49k2kpuJllJrGyzEJ41hcgXSAIXv", "BzNKo3YGzGeoWEtQUPLlfgZerYNGED9on6DEAfGd");

    var User = Parse.Object.extend("Users");

    $scope.clearData = function(){
      $scope.username = "";
      $scope.password = "";
    };

    $scope.authUser = function(){
      var users = new Parse.Query(User);

      users.find({success: function(){
        for(var user in users){
          
        }

      }, error: function(error){
        console.log("Query Error: "+error.message);
      }})
    }
}]);
