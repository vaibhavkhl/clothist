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
    $scope.dislikepreference.formal_no_dress_code_image = false;
    $scope.dislikepreference.shirt_denim_image = false;
    $scope.dislikepreference.shirt_trouser_final_image = false;
    $scope.dislikepreference.suit_image = false;
  });
