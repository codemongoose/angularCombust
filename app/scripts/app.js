'use strict';

/**
 * @ngdoc overview
 * @name angularFireApp
 * @description
 * # angularFireApp
 *
 * Main module of the application.
 */
angular
  .module('angularFireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
        .when('/appdemo', {
        templateUrl: 'views/appdemo.html',
        controller: 'AboutCtrl'
      })
        .when('/appdemo/ducks', {
        templateUrl: 'views/ducks.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
