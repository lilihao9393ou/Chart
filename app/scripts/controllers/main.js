'use strict';

/**
 * @ngdoc function
 * @name ngprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngprojectApp
 */
angular.module('ngprojectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
