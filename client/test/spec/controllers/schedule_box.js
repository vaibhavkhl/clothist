'use strict';

describe('Controller: ScheduleBoxCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ScheduleBoxCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleBoxCtrl = $controller('ScheduleBoxCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ScheduleBoxCtrl.awesomeThings.length).toBe(3);
  });
});
