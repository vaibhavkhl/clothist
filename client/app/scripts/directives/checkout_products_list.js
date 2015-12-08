'use strict';

angular.module('clientApp')
  .directive('checkoutProductsList', function () {
  	return {
  		restrict:'E',
  		scope:{
  			item:'='
  		},
  		templateUrl:'views/checkout_products_list.html',
  		link:function(scope){
        scope.parseToInt = function (val){
          return parseInt(val);
        }
  		}
  	}
  });
