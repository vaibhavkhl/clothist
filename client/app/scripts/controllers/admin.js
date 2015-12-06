'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('AdminCtrl', function ($scope, $auth, product, boxService, user,
    $rootScope, $state) {

    checkAdmin();
    activate();
    $scope.selectedBoxProducts = [];
    $scope.selectedUser = {};
    $scope.box = {};

    function checkAdmin() {
      if ($rootScope.user.role == 'admin') {
        $state.go('admin')
      } else {
        $state.go('landing')
      }
    }

    function getAllUsers() {
      user.getAllUsers().then(function(resp) {
        $scope.users = resp.data.user;
      });
    }

    function activate() {
      product.getAllProducts().then(function(resp) {
        $scope.products = resp.data.products;
      });

      getAllUsers();
    }

    $scope.signOut = function() {
      $auth.signOut()
        .then(function(resp) {
          // handle success response
        })
        .catch(function(resp) {
          // handle error response
        });
    };

    $scope.selectUser = function(user) {
      $scope.selectedUser = user;
    }

    $scope.createUser = function(params) {

      params.password = 'Clothist@12'
      params.password_confirmation = 'Clothist@12'
      var user = {user: params}

      $auth.submitRegistration(user)
        .then(function(response) {
          getAllUsers();
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
        generateLink(resp.data.box);
      })
    }

    var generateLink = function(box) {
      $scope.link = 'clothist.herokuapp.com/#/checkout/' + box.unique_identifier;
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
