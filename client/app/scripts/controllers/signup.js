'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('SignupCtrl', function ($scope, $auth, $state, $rootScope) {
    $scope.user = {};
    $scope.workpreference = {};
    $scope.leisurepreference = {};
    $scope.dislikepreference = {};
    $scope.patternsdislikepreference = {};
    $scope.costpreference = {};

    $scope.submit = function() {
      var params = getUserParams();
      $auth.submitRegistration(params)
        .then(function(response) {
          $rootScope.current_user = response.data.data;
          $state.go('home')
        })
        .catch(function(resp) {
          if (resp.data.errors) {
            $scope.errors = resp.data.errors.full_messages[0];
          }
          $scope.errors = 'Some error occured, please try again.'
        });
    };

    var getUserParams = function() {
      $scope.user.work_preferences_attributes =
        getParams($scope.workpreference);
      $scope.user.leisure_preferences_attributes =
        getParams($scope.leisurepreference);
      $scope.user.dislike_preferences_attributes =
        getParams($scope.dislikepreference);
      $scope.user.patterns_dislike_preferences_attributes =
        getParams($scope.patternsdislikepreference);
      $scope.user.cost_preferences_attributes =
        getParams($scope.costpreference);

      var params = {user: $scope.user};
      console.log(params)
      return params;
    };

    var getParams = function(model) {
      var attributes = [];
      _.each(model, function(val, key) {
        if (val) {
          attributes.push({image_name: key});
        }
      });
      return attributes;
    };

  });
