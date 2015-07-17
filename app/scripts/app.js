'use strict';

/**
 * @ngdoc overview
 * @name itcApp
 * @description
 * # itcApp
 *
 * Main module of the application.
 */
var app = angular
  .module('itcApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'chart.js'
  ])
  .config(['$routeProvider','$mdThemingProvider',function($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/recipient', {
        templateUrl: 'views/recipient.html',
        controller: 'RecipientCtrl'
      })
      .when('/simulation',{
        templateUrl: 'views/simulation.html',
        controller: 'SimulationCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $mdThemingProvider
      .theme('default')
      .primaryPalette('red')
      .accentPalette('amber')
      .warnPalette('amber');


  }]);


