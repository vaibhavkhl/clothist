'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('HomeCtrl', function ($scope, $auth, $state, $rootScope, user) {
    $rootScope.showLeftMenu = false;
    console.log("home ctrl")
    $scope.signOut = function() {
  		$auth.signOut().then(function() {
  			$state.go('login');
  		});
  	};

    user.getCurrentUser().then(function(resp) {
      if (resp.data.user.size_profile) {
        $state.go('home.schedulebox');
      } else {
        $state.go('home.sizeprofile')
      }
    });

  });
