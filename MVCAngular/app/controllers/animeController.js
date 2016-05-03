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


        $http.get('/MVCAngular/Anime/IndexValues')
            .success(function (data) {
            console.log(data);
            vm.anime = data;
        });
    }

    animeCtrl.$inject = ['$scope', '$http'];

    angular.module('app')
    .controller('animeCtrl', animeCtrl);

})();