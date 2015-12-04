'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:FeedbackCtrl
 * @description
 * # FeedbackCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('CheckoutCtrl', function ($scope, $stateParams, box) {
      box.getBoxByIdentifier($stateParams.unique_identifier)
        .then(function(resp) {
          $scope.box = resp.data.box;
      });
      // $scope.box = {
      //                   "box": {
      //                     "payment_method":'cash on pickup',
      //                     "id": 1,
      //                     "unique_identifier": "a58711ce2f95",
      //                     "box_products_attributes": [
      //                     {
      //                       "id": 1,
      //                       "product_id": 1,
      //                       "accepted": true,
      //                       "returned_product_reason_attributes": null,
      //                       "product": {
      //                       "id": 1,
      //                       "description": "blue tshirt",
      //                       "original_price": "1000.0",
      //                       "brand": "US Polo",
      //                       "sell_price": "700.0",
      //                       "feedback_required": false
      //                     }
      //                   },
      //                   {
      //                     "id": 2,
      //                     "product_id": 2,
      //                     "accepted": true,
      //                     "returned_product_reason_attributes": {"size": "tight","price":"low","color":"bright","style":"opt1"},
      //                     "product": {
      //                     "id": 2,
      //                     "description": "black jeans",
      //                     "original_price": "1800.0",
      //                     "brand": "levis",
      //                     "sell_price": "1800.0",
      //                     "feedback_required": true
      //                     }
      //                   },
      //                   {
      //                     "id": 3,
      //                     "product_id": 3,
      //                     "accepted": true,
      //                     "returned_product_reason_attributes": {"size": "tight","price":"low","color":"bright","style":"opt1"},
      //                     "product": {
      //                     "id": 3,
      //                     "description": "white shirt",
      //                     "original_price": "1500.0",
      //                     "brand": "blackberry",
      //                     "sell_price": "1200.0",
      //                     "feedback_required": true
      //                     }
      //                   }
      //                 ]
      //               }
      //           };
  });
