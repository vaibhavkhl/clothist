angular.module('clientApp')
.directive('checkoutReturnDetails', function () {
  return {
    restrict: 'E',
    scope: {
      item: '='
    },
    templateUrl: ' views/checkout_return_details.html',
    link: function(scope){

    }
  }
});
