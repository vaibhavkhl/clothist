'use strict';

describe('Controller: NotWearPreferenceCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var NotWearCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NotWearCtrl = $controller('NotWearPreferenceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NotWearCtrl.awesomeThings.length).toBe(3);
  });
});
