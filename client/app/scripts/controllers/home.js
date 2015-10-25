'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, $auth, $state) {
    $scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$state.go('login');
  		});
  	};
  });
