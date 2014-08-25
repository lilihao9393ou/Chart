'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ChartApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $compile, $window) {
    $window.CanvasJS = { Chart: function(){
      this.render = function() {};
    } };

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of inputs to the scope', function () {
    expect(scope.inputs.length).toBe(3);
  });

  it('expect reverse to be false', function () {
    expect(scope.reverse).toBe(false);
  });
});
