'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:PatternsDislikePreferenceCtrl
 * @description
 * # PatternsDislikePreferenceCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('PatternsDislikePreferenceCtrl', function ($scope) {

    $scope.patternsdislikepreference.boldchecks_image = false;
    $scope.patternsdislikepreference.boldpatterns_image = false;
    $scope.patternsdislikepreference.largelogo_image = false;
    $scope.patternsdislikepreference.printedshirt_image = false;

  });
