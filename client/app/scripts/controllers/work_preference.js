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

    $scope.workpreference.formal_no_dress_code_image = false;
    $scope.workpreference.shirt_denim_image = false;
    $scope.workpreference.shirt_trouser_final_image = false;
    $scope.workpreference.suit_image = false;

  });
