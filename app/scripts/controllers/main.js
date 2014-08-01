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
	  $scope.addRow = function () {
		  $scope.values.push($scope.value);
		  $scope.value = '';
		};
		
      $scope.orderByField = 'time';
      $scope.reverseSort = false;
		
	  $scope.values = [{
		  'date': '08/01/2014',
		  'url': 'www.google.com',
	      'time': '33'
	  }];
  });
