myApp.controller('InfoController', function(ItemsService){
    var vm = this;
    vm.getItems = function(){
        ItemsService.getItems();
        vm.items = ItemsService.itemsObject;
        console.log('items in controller', vm.items);
    };
    vm.getItems();

});