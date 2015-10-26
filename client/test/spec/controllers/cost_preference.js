'use strict';

describe('Controller: CostPreferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SpendCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpendCtrl = $controller('CostPreferenceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpendCtrl.awesomeThings.length).toBe(3);
  });
});
