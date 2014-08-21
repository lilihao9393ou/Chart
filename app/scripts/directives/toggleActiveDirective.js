'use strict';

/*global $:false */
var directives = angular.module('ChartApp.directives');

directives.directive('mcToggleActive', function() {
 return {
  link: function(scope, element) {
   element.find('li').on('click', function() {
     $(this).addClass('active').siblings().removeClass('active');
   });
  }
 };
});