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
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $mdThemingProvider
      .theme('default')
      .primaryPalette('teal')
      .accentPalette('deep-purple')
      .warnPalette('red');


  });


