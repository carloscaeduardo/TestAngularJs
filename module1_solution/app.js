(function(){
  "use strict";
  angular.module('ItemCounter', [])
  .controller('ItemCounterController', function($scope){
    $scope.item = "";
    $scope.messageToShow = "";

    $scope.CheckIfTooMuch = function(){
      var itemsNumber = countItems($scope.item); //get the total number of items separated by a comma.
      if($scope.item == ""){
        $scope.messageToShow = "The list is empty! Please add items!";
      }else if(itemsNumber < 4 ){
        $scope.messageToShow = "Enjoy!";
      }else{
        $scope.messageToShow = "it's Too Much! You'll get fat!";
      }

    };

    function countItems(string){
      var splitString = string.split(",");
      var separatedItemsCount = 0;
      for (var i=0; i < splitString.length; i ++) {
        separatedItemsCount ++ ;
      }
      return separatedItemsCount;
    };


  });




})();
