'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:DislikePreferenceCtrl
 * @description
 * # DislikePreferenceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('DislikePreferenceCtrl', function ($scope) {

    $scope.dislikepreference.coloured_chino_image = false;
    $scope.dislikepreference.distressed_denim_image = false;
    $scope.dislikepreference.half_sleeved_shirt_image = false;
    $scope.dislikepreference.vneck_image = false;

  });
