'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LeisurePreferenceCtrl
 * @description
 * # LeisurePreferenceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LeisurePreferenceCtrl', function ($scope) {
    $scope.leisurepreference.formal_no_dress_code_image = false;
    $scope.leisurepreference.shirt_denim_image = false;
    $scope.leisurepreference.shirt_trouser_final_image = false;
    $scope.leisurepreference.suit_image = false;
  });
