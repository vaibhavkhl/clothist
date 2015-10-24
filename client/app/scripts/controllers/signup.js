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
    $scope.user = {workpreference_attributes: [
      {image_name: 'test image 1'},
      {image_name: 'test image 2'}
    ]};

    $scope.submit = function() {
      var params = {user: $scope.user};
      $auth.submitRegistration(params)
        .then(function(response) {
          $rootScope.current_user = response.data.data;
          $state.go('home')
        })
        .catch(function(resp) {
          $scope.errors = resp.data.errors.full_messages[0];
        });
    };

  });
