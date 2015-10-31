'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, $auth, $state, box, $rootScope) {
    $scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$state.go('login');
  		});
  	};

    $scope.scheduleBox = function() {
      $scope.box.user_id = $rootScope.user.id;
      box.create($scope.box);
    };
  });
