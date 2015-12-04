angular.module('clientApp')
  .controller('CheckoutReviewOrderCtrl', function ($scope, $stateParams, box) {
  	$scope.acceptedItems = [];

  	function getAcceptedItems(){
	  	_.each($scope.box.box.box_products_attributes, function (obj){
	  		if(obj.accepted){
	  			$scope.acceptedItems.push(obj);
	  		}
	  	})
  	}

  	function calcSum(){
  		console.log($scope.acceptedItems)
  		var sum = 0;
  		_.each($scope.acceptedItems,function (obj){
  			sum += parseInt(obj.product.sell_price);
  		})
  		return sum;
  	}

  	$scope.calculateTotal = function(){
  		getAcceptedItems();
  		$scope.box.box.totalPrice = calcSum();
  	}

  	$scope.calculateTotal();
});