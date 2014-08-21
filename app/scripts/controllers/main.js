'use strict';

/*global CanvasJS:false */

/**
 * @ngdoc function
 * @name ngprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngprojectApp
 */
angular.module('ChartApp')
  .controller('MainCtrl', function ($scope) {
    
    // Regexp to ensure that input dates are in the required format
    $scope.dateRegexp = /^(January|February|March|April|June|July|August|Semptember|October|November|December)[ ](0[1-9]|1[0-9]|2[0-9]|3[0-1])[ ](19|20)\d{2}$/i;
 
    // Called to remove an entry
    $scope.removeInput = function (index) {
      $scope.inputs.splice(index, 1);
    };

    // Called to add an entry
    $scope.addRow = function () {
      $scope.inputs.push($scope.value);
      $scope.value = '';
    };
		
     $scope.predicate = '';
     $scope.reverse = false;
     $scope.inputs = [];
     $scope.updateMyText = function() {};
      
     // Chart below
     var datapoints = [];
      
     var chartPoint = null;
     $scope.canEdit = true;
     $scope.editMode = false;
     $scope.units = 1; // increase or decrease bar value by this unit
     $scope.chart = new CanvasJS.Chart('chartContainer', {
       theme: 'theme1',
       interactivityEnabled: true,
       title:{
          text: 'Website response time'              
       },
       axisY: {
          title: 'ms',
          labelFontSize: 16,
       },
       axisX: {
          title: 'timeline',
          labelFontSize: 16,
          gridThickness: 1
       },
       data: [              
          {
            click: function() {
              $scope.$apply(function() {
                if($scope.canEdit) {
                  $scope.editMode = !$scope.editMode; 
                }
              });
              
              if($scope.editMode) {
                console.log('EditMode is now TRUE');
              }
              
              if(!$scope.editMode) {
                console.log('EditMode is now FALSE');
              }
            },
            mousemove: function(e) {
              if(!$scope.editMode) {
                chartPoint = null;
                return false;
              }
              
              // First point? Assign it and return
              if(null === chartPoint) {
                chartPoint = e;
                return false;
              }
              
              // Update inputs at the correct index will re-render graph and table data
              $scope.$apply(function() {
                var diffY = e.y - chartPoint.y; // if it is > 0 means that the mouse pointer went UP
                var time = diffY < 0 ? e.dataPoint.y+$scope.units : e.dataPoint.y-$scope.units;
                $scope.inputs[e.dataPointIndex].time = time;
                // Update chartPoint
                chartPoint = e;
              });
              
            },
             type: 'column',
             dataPoints: []
          }
       ]
    });

    $scope.chart.render(); //render the chart for the first time
            
    $scope.changeChartType = function(chartType) {
      $scope.canEdit = 'column' === chartType;
      $scope.editMode = false; // disable EditMode whatever the type is
      $scope.chart.options.data[0].dataPoints = datapoints;
      $scope.chart.options.data[0].type = chartType;
        $scope.chart.render(); //re-render the chart to display the new layout
    };
    
    // DEEP watch for any changes in the array
    $scope.$watch('inputs', function() {
      datapoints = [];
      for(var i in $scope.inputs) {
        var e = $scope.inputs[i];
        // update the timestamp for the value
        var d = new Date(e.date);
        e.timestamp = d.valueOf() / 1000;
        datapoints.push({
          'label': e.url,
          x: new Date(e.date),
          y: e.time
        });
      }
      // Reassign data to chart
      $scope.chart.options.data[0].dataPoints = datapoints;
      $scope.chart.render();
    }, true);
    

    $scope.inputs.push({
      date: 'January 02 2014',
      url: 'http://uno.it',
      time: 111
    });
    
    $scope.inputs.push({
      date: 'January 12 2014',
      url: 'http://due.it',
      time: 292
    });
    
    $scope.inputs.push({
      date: 'January 22 2014',
      url: 'http://tre.it',
      time: 333
    });
      
  });