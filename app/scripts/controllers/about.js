'use strict';

/**
 * @ngdoc function
 * @name itcApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the itcApp
 */
angular.module('itcApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });