'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:WorkPreferenceCtrl
 * @description
 * # WorkPreferenceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('WorkPreferenceCtrl', function ($scope, $state) {

    $scope.workpreference.no_dress_code_image = false;
    $scope.workpreference.smart_casual_image = false;
    $scope.workpreference.formals_image = false;
    $scope.workpreference.suit_image = false;

  });
