(function () {
    var animeCtrl = function () {
        var vm = this;
        vm.name = 'HELLO';
    }

    angular.module('app')
    .controller('animeCtrl', animeCtrl);

})();