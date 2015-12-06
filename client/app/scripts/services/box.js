'use strict';

/**
 * @ngdoc service
 * @name clientApp.box
 * @description
 * # box
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('boxService', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.create = function(params) {
      return $http.post($auth.apiUrl() + '/box', {box: params});
    };

    this.getBoxByIdentifier = function(identifier) {
      return $http.get($auth.apiUrl() +
        '/get_box_by_unique_identifier?unique_identifier=' + identifier);
    }

    this.createBoxByAdmin = function(params) {
      return $http.post($auth.apiUrl() + '/create_box_by_admin', {box: params});
    }

    this.update = function(params) {
      return $http.patch($auth.apiUrl() + '/box/' + params.id, {box: params});
    }
  });
