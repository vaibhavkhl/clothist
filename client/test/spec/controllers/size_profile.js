'use strict';

describe('Controller: SizeProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var SizeProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SizeProfileCtrl = $controller('SizeProfileCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SizeProfileCtrl.awesomeThings.length).toBe(3);
  });
});
