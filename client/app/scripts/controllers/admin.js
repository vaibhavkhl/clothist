'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AdminCtrl', function ($scope, $auth, product, boxService) {

    console.log($scope)
    activate();
    $scope.selectedBoxProducts = [];
    $scope.selectedUser = null;
    $scope.box = {};

    function activate() {
      product.getAllProducts().then(function(resp) {
        $scope.products = resp.data.products;
      });
    }

    $scope.createUser = function(params) {

      params.password = 'Clothist@12'
      params.password_confirmation = 'Clothist@12'
      var user = {user: params}

      $auth.submitRegistration(user)
        .then(function(response) {
          console.log(response)
          $scope.selectedUser = response.data.data;
          console.log($scope.selectedUser)
        })
        .catch(function(resp) {
          console.log(resp);
        });
    };

    $scope.addProductToBox = function(product) {
      $scope.selectedBoxProducts.push(product);
    }

    $scope.createBox = function() {
      var box = $scope.box;
      box.user_id = $scope.selectedUser.id;
      box.box_products_attributes = _.map($scope.selectedBoxProducts,
        function(product) {
          return {product_id: product.id};
      })
      console.log('boxxxx params', box)
      boxService.createBoxByAdmin(box).then(function(resp) {
        //generateLink();
      })
    }

    // angular formly fields
    $scope.userFields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Name'
        }
      },
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      }
    ]

    // $scope.boxFields = [
    //   {
    //     key: 'delivery_date_requested',
    //     type: 'datepicker',
    //     templateOptions: {
    //       label: 'Delivery date requested'
    //     }
    //   },
    //   {
    //     key: 'delivery_date_actual',
    //     type: 'datepicker',
    //     templateOptions: {
    //       label: 'Delivery date requested'
    //     }
    //   }
    // ]
  });
