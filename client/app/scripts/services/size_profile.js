'use strict';

/**
 * @ngdoc service
 * @name clientApp.size_profile
 * @description
 * # size_profile
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('size_profile', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.create = function(params) {
      return $http.post($auth.apiUrl() + '/size_profiles', {size_profile: params});
    };
  });
