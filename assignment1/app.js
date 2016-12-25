(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.dishes = '';
    $scope.dishesCount = 0;

    $scope.checkDishes = function () {

        var arrayOfDishes = $scope.dishes.split(',');
        $scope.dishesCount = arrayOfDishes.length;

        if (!$scope.dishes) {
          $scope.dishesCount = 0;
        }
        $scope.message = getMessage($scope.dishesCount);
    };

    function getMessage(count) {
      if (count == 0) {
        return 'Please enter data first';
      } else if (count > 0 && count <=3) {
        return 'Enjoy!';
      } else if (count > 3) {
          return 'Too much!';
      }
    }

  };

})();
