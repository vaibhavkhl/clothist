'use strict';

/**
 * @ngdoc service
 * @name clientApp.admin
 * @description
 * # admin
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('admin', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.createBox = function(params) {
      return $http.post($auth.apiUrl() + '/create_box_by_admin', {box: params});
    };
  });
