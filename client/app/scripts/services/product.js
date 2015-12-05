'use strict';

/**
 * @ngdoc service
 * @name clientApp.product
 * @description
 * # product
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('product', function ($http, $auth) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    this.getAllProducts = function() {
      return $http.get($auth.apiUrl() + '/products');
    };
  });
