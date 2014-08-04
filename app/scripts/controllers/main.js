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
		  $scope.inputs.push($scope.value);
		  $scope.value = '';
		  $scope.updateChart();
		};
		
      $scope.orderByField = 'time';
      $scope.reverseSort = false;
      
      $scope.inputs = [{
    	  'date': '08/01/2014',
    	  'url': 'www.google.com',
    	  'time': 33
      }];
      
      $scope.updateMyText = function() {
          $scope.myText = 'Selected';
        };
      
      $scope.updateChart = function () {		     
    	  $scope.values = {
		    		  series: ['Response time'],
		    		  data: []
    	  };
    	  for(var i in $scope.inputs) {
      

    		  var a = {
    				  x: $scope.inputs[i].date,
    				  y: [$scope.inputs[i].time],
    				  tooltip: $scope.inputs[i].url
    				  
    		  };
    		  $scope.values.data.push(a);
    		  console.log($scope.values.data);
    	  }
      };
      $scope.updateChart();
	  
	  $scope.chartType = 'bar';
	  
	  $scope.chartConfig = {
			  labels: false,
			  title : 'Response time',
			  legend : {
				  display:true,
				  position:'left'
			  },
			  innerRadius: 0
	  };
  });
