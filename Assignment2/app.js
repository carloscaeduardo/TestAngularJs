(function(){
  "use-strict";

  angular.module("ShoppingListApp", [])
  .controller("ToBuyController", ToBuyController)
  .controller("AlreadyBoughtController", AlreadyBoughtController)
  .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
    toBuyList.buyingItems = function(itemIndex){
      ShoppingListCheckOffService.fromBuytoBoughtList(itemIndex);
    };


  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBoughtList = this;
    alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;

    var toBuyItems = [
      { name: "Cookie",
        quantity:"2 bags"
      },
      { name: "Donuts",
        quantity:"4 units"
      },
      { name: "Lettuce",
        quantity:"2 units"
      },
      { name: "cake",
        quantity:"1 unit"
      },
      { name: "car",
        quantity:"2 units"
      }
    ];
    console.log("To Buy list: ", toBuyItems);

    var boughtItems = [];

    console.log("Items Bought: ", boughtItems);

    service.getToBuyItems = function() {
        return toBuyItems;
    };

    service.getBoughtItems = function(){
        return boughtItems;
    };

    service.fromBuytoBoughtList = function(itemIndex){
      var itemChanged = "";
      itemChanged = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex, 1);
      boughtItems.push(itemChanged);
    };



  }





})();
