(function () {
    angular.module('app')
    .directive('loadingButton', function () {
        return {
            restrict: 'A',
            scope: {spin: '='},
            link: function (scope, element, attrs) {
                
                $(element).ladda();
                scope.$watch('spin', function (newValue, oldValue) {
                    if (newValue) {
                        $(element).ladda('start');
                    }
                    else {
                        $(element).ladda('stop');
                    }
                });

                // use jquery to use the element that we're passing int. 
                // link function runs as soon as it executes.                 
                // usage https://github.com/hakimel/Ladda

                
            }
        }
    });

})();