'use strict';

/**
 * @ngdoc overview
 * @name ngprojectApp
 * @description
 * # ngprojectApp
 *
 * Main module of the application.
 */
angular
  .module('ChartApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui',
    'ChartApp.directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
