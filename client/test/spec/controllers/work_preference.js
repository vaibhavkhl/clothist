'use strict';

describe('Controller: WorkPreferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var WorkCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkCtrl = $controller('WorkPreferenceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WorkCtrl.awesomeThings.length).toBe(3);
  });
});
