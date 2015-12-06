'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CheckoutThankYouCtrl', function ($scope, boxService, $window) {
        $scope.showFeedbackForm = true;

        $scope.submitFeedback = function() {
          var params = {};
          params.id = $scope.box.id;
          params.feedback_attributes = $scope.feedback;
          boxService.update(params).then(function() {
            $scope.showFeedbackForm = false;
          })
        }
  });
