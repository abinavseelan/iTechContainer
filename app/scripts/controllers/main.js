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
.controller('MainCtrl', ['$scope','$mdSidenav', function($scope, $mdSidenav){
	$scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
}]);
