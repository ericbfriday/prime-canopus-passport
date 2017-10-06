myApp.controller('AddController', function (ItemsService) {
    console.log('in add controller');
    var vm = this;

    vm.addItem = function(){
        var shelfObj = {
            url: vm.urlIn,
            description: vm.descriptionIn
        };
        ItemsService.addItem(shelfObj);
    };

});