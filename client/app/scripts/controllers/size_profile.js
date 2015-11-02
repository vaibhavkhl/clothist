'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SizeProfileCtrl
 * @description
 * # SizeProfileCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SizeProfileCtrl', function ($scope, $rootScope, size_profile) {
    $scope.size_profile = {};

    $scope.submit = function() {
      $scope.size_profile.user_id = $rootScope.user.id;
      size_profile.create($scope.size_profile);
    };
  });
