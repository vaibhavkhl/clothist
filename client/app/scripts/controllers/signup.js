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
    $scope.work = {};

    $scope.submit = function() {
      var params = getParams();
      $auth.submitRegistration(params)
        .then(function(response) {
          $rootScope.current_user = response.data.data;
          $state.go('home')
        })
        .catch(function(resp) {
          $scope.errors = resp.data.errors.full_messages[0];
        });
    };

    var getParams = function() {
      var work_params = getWorkParams();
      $scope.user.workpreference_attributes = work_params;
      var params = {user: $scope.user};
      return params;
    }

    var getWorkParams = function() {
      var attributes = []
      _.each($scope.work, function(val, key) {
        if (val) {
          attributes.push({image_name: key});
        }
      });
      return attributes;
    }

  });
