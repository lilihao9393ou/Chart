'use strict';

/**
 * @ngdoc function
 * @name ngprojectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngprojectApp
 */
angular.module('ngprojectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
