'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('FeedbackCtrl', function ($scope) {
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
  				"selection":"return"
  			}
  		]
  		      $scope.color = {
        name: 'blue'
      };

  });
