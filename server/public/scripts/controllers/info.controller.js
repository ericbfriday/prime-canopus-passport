myApp.controller('InfoController', function(ItemsService){
    var vm = this;
    vm.getItems = function(){
        ItemsService.getItems();
    };
    vm.getItems();
    
});