myApp.controller('LoginController', function(UserService) {
    console.log('in LoginController');
    
    var vm = this;
    
    vm.user = {
        username: '',
        password: ''
    }

    vm.registerUser = function() {
        UserService.registerUser(vm.user);
    }

    vm.login = function() {
        console.log('in login logging vm.user -> ', vm.user);
        UserService.login(vm.user);
    }
    
});