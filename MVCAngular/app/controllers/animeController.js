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
        vm.newAnime = {};
        vm.fields = [];
        vm.canAddAnime = false;
        vm.onAddAnime = function () { vm.canAddAnime = !vm.canAddAnime; };
        vm.onAdd = function () {
            vm.newAnime.Id = 0;
            console.log(vm.newAnime);
            $http.post('/MVCAngular/Anime/Save/', vm.newAnime).success(function (data) {
                console.log(data);
            });
        };
        vm.onCancel = function () { vm.newAnime = {}; vm.canAddAnime = !vm.canAddAnime; };

        $http.get('/MVCAngular/Anime/IndexValues')
            .success(function (data) {
            vm.anime = data;
            if (vm.anime.length > 0) {
                for (var prop in vm.anime[0]) {
                    if(prop !== 'Id')
                    vm.fields.push(prop);
                }
            }
            console.log(vm.anime);
            console.log(vm.fields);
                //map the dates. 
            vm.anime = vm.anime.map(function (obj) {
                
                obj['Release'] = new Date(parseInt(obj['Release'].replace("/Date(", "").replace(")/", ""), 10));
                return obj;
            });
                //http://stackoverflow.com/questions/726334/asp-net-mvc-jsonresult-date-format
        });
    }

    animeCtrl.$inject = ['$scope', '$http'];

    angular.module('app')
    .controller('animeCtrl', animeCtrl);

})();