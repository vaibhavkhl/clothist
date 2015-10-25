'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:WorkCtrl
 * @description
 * # WorkCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('WorkCtrl', function ($scope, $state) {
    $scope.work.formal_no_dress_code_image = false;
    $scope.work.shirt_denim_image = false;
    $scope.work.shirt_trouser_final_image = false;
    $scope.work.suit_image = false;

    $scope.goToLeisure = function() {
      console.log($scope)
      $state.go('signup.leisure');
    }
  });
