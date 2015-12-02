'use strict';

/**
 * @ngdoc service
 * @name clientApp.box
 * @description
 * # box
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('box', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.create = function(params) {
      return $http.post($auth.apiUrl() + '/box', {box: params});
    };

    this.getBoxByIdentifier = function(identifier) {
      return $http.get($auth.apiUrl() + '/get_box_by_unique_identifier?unique_identifier=' + identifier);
    }
  });
