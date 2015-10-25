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
    console.log($rootScope.current_user)
    $scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$state.go('login');
  		});
  	};
  });
