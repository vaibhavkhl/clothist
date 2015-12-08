'use strict';

angular.module('clientApp')
.controller('CheckoutReviewOrderCtrl', function ($scope, $stateParams, boxService) {
  $scope.acceptedProducts = [];

  function getAcceptedProducts() {
    if($scope.box!=undefined) {
      var acceptedProducts = [];
      _.each($scope.box.box_products, function (product){
        if(product.accepted) {
          acceptedProducts.push(product);
        }
        $scope.acceptedProducts = acceptedProducts;
      });
    }
  }

  function calcSum() {
    var sum = 0;
    _.each($scope.acceptedProducts, function (product){
      sum += parseInt(product.product.sell_price);
    })
    return sum;
  }

  var calculateTotal = function() {
    getAcceptedProducts();
    if($scope.box!=undefined) {
      $scope.box.products_bought_cost = calcSum();
    }
  }

  calculateTotal();

  $scope.processOrder = function() {
    var params = getParams();
    console.log(params)
    boxService.update(params);
  }

  var getParams = function() {
    var box = {};
    box.id = $scope.box.id;
    box.processed = true;
    box.payment_method = $scope.box.payment_method;
    box.products_bought_cost = $scope.box.products_bought_cost;
    box.box_products_attributes = _.map($scope.box.box_products,
      function(product) {
        return {
          id: product.id,
          accepted: product.accepted,
          returned_product_reason_attributes: product.returned_product_reason
        }
      });
      return box;
    }
  });
