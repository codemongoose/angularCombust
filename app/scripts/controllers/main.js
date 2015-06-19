'use strict';

/**
 * @ngdoc function
 * @name angularFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularFireApp
 */
angular.module('angularFireApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
