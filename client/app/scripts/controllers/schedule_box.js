'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleBoxCtrl
 * @description
 * # ScheduleBoxCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleBoxCtrl', function ($scope, boxService, $rootScope) {
    $scope.scheduleBox = function() {
      $scope.box.user_id = $rootScope.user.id;
      boxService.create($scope.box);
    };
  });
