'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FeedbackCtrl', function ($scope, $stateParams, box) {
      box.getBoxByIdentifier($stateParams.unique_identifier)
        .then(function(resp) {
          $scope.box = resp.data.box;
          console.log($scope.box)
        })

  		$scope.products = [
  			{
  				"id":1,
  				"name":"Product1",
  				"desc":"Details of Product1",
  				"cost":"Rs. 1000",
  				"selection":"keep"
  			},
  			{
  				"id":2,
  				"name":"Product2",
  				"desc":"Details of Product2",
  				"cost":"Rs. 1200",
  				"selection":"keep"
  			}
  		]
  		      $scope.color = {
        name: 'blue'
      };

  });
