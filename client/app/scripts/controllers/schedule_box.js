'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ScheduleBoxCtrl
 * @description
 * # ScheduleBoxCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ScheduleBoxCtrl', function ($scope, box, $rootScope) {
    $scope.scheduleBox = function() {
      $scope.box.user_id = $rootScope.user.id;
      box.create($scope.box);
    };
  });
