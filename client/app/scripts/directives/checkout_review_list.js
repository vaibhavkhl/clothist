angular.module('clientApp')
  .directive('checkoutReviewList', function () {
  	return {
  		restrict:'E',
  		scope:{
  			product:'='
  		},
  		templateUrl:'views/checkout_review_list.html',
  		link:function(scope){

  		}
  	}
  });
