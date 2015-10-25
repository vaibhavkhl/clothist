'use strict';

describe('Controller: PatternsUnlikeCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var PatternsUnlikeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatternsUnlikeCtrl = $controller('PatternsUnlikeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PatternsUnlikeCtrl.awesomeThings.length).toBe(3);
  });
});
