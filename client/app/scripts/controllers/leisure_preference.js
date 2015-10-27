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

    $scope.leisurepreference.casual_image = false;
    $scope.leisurepreference.formal_image = false;
    $scope.leisurepreference.relaxed_image = false;
    $scope.leisurepreference.smart_image = false;

  });
