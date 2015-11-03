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
    $scope.current_size_level = 1;
    $scope.size_selection = {
    	1:{
    		"type":"T-shirt size",
    		"sizes":["XS","S","M","L","XL"]
    	},
    	2:{
    		"type":"Shirt Size",
    		"sizes":["34","36","38","40","42"]
    	},
    	3:{
    		"type":"Trouser/Denim Size",
    		"sizes":["28","30","32","34","36"]
    	}
    }
    $scope.goToNextLevel = function(){
    	if($scope.current_size_level<3){
    		$scope.current_size_level++;
    	}
    }
  });
