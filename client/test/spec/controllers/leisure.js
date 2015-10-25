'use strict';

describe('Controller: LeisureCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var LeisureCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeisureCtrl = $controller('LeisureCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeisureCtrl.awesomeThings.length).toBe(3);
  });
});
