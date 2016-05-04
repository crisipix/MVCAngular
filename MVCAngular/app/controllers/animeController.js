(function () {

    /*
        Migrate data from the MVC world to Angular. 
        Will have to come through the scope. 
        get the values from the controller. 
    */
    var animeCtrl = function ($scope, $http) {
        var vm = this;
        vm.name = 'Anime Information';
        vm.anime = [{ Name: 'Hello' }, { Name: 'Hello' }, { Name: 'Hello' }];
        vm.fields = [];

        $http.get('/MVCAngular/Anime/IndexValues')
            .success(function (data) {
            vm.anime = data;
            if (vm.anime.length > 0) {
                for (var prop in vm.anime[0]) {
                    vm.fields.push(prop);
                }
            }
            console.log(vm.anime);
            console.log(vm.fields);

        });
    }

    animeCtrl.$inject = ['$scope', '$http'];

    angular.module('app')
    .controller('animeCtrl', animeCtrl);

})();