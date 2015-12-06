'use strict';

/**
 * @ngdoc service
 * @name clientApp.user
 * @description
 * # user
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('user', function ($http, $auth, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getCurrentUser = function() {
      return $http.get($auth.apiUrl() + '/user/' + $rootScope.user.id);
    };

    this.getAllUsers = function() {
      return $http.get($auth.apiUrl() + '/user')
    }
  });
