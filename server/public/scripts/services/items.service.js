myApp.service('ItemsService', function($http){
    var self = this;
    self.itemsObject = {
        items:[]
    };



    self.getItems = function(){
        $http({
            method: 'GET',
            url: '/items'
        }).then(function(res){
            console.log('ItemsService res: ', res);
            self.itemsObject.items = res.data;
        });
    }
});