(function () {

    /*
        Migrate data from the MVC world to Angular. 
        Will have to come through the scope. 
        get the values from the controller. 
    */
    var dashCtrl = function ($scope, $http) {
        var vm = this;
        vm.name = 'sample-01';
        //vm.model;
        //if (!vm.model) {
        //    // set default vm.model for demo purposes
        //    vm.model = {
        //        title: "Sample 01",
        //        structure: "4-8",
        //        rows: [{
        //            columns: [{
        //                styleClass: "col-md-4",
        //                widgets: [{
        //                    type: "linklist",
        //                    config: {
        //                        links: [{
        //                            title: "SCM-Manager",
        //                            href: "http://www.scm-manager.org"
        //                        }, {
        //                            title: "Github",
        //                            href: "https://github.com"
        //                        }, {
        //                            title: "Bitbucket",
        //                            href: "https://bitbucket.org"
        //                        }, {
        //                            title: "Stackoverflow",
        //                            href: "http://stackoverflow.com"
        //                        }]
        //                    },
        //                    title: "Links"
        //                }, {
        //                    type: "weather",
        //                    config: {
        //                        location: "Hildesheim"
        //                    },
        //                    title: "Weather Hildesheim"
        //                }, {
        //                    type: "weather",
        //                    config: {
        //                        location: "Edinburgh"
        //                    },
        //                    title: "Weather"
        //                }, {
        //                    type: "weather",
        //                    config: {
        //                        location: "Dublin,IE"
        //                    },
        //                    title: "Weather"
        //                }]
        //            }, {
        //                styleClass: "col-md-8",
        //                widgets: [{
        //                    type: "randommsg",
        //                    config: {},
        //                    title: "Douglas Adams"
        //                }, {
        //                    type: "markdown",
        //                    config: {
        //                        content: "![scm-manager logo](https://bitbucket.org/sdorra/scm-manager/wiki/resources/scm-manager_logo.jpg)\n\nThe easiest way to share and manage your Git, Mercurial and Subversion repositories over http.\n\n* Very easy installation\n* No need to hack configuration files, SCM-Manager is completely configureable from its Web-Interface\n* No Apache and no database installation is required\n* Central user, group and permission management\n* Out of the box support for Git, Mercurial and Subversion\n* Full RESTFul Web Service API (JSON and XML)\n* Rich User Interface\n* Simple Plugin API\n* Useful plugins available ( f.e. Ldap-, ActiveDirectory-, PAM-Authentication)\n* Licensed under the BSD-License"
        //                    },
        //                    title: "Markdown"
        //                }]
        //            }]
        //        }]
        //    };
        //}
        
        vm.model = {
            title: "Sample 01",
            structure: "4-8",
            rows: [{
                columns: [{
                    styleClass: "col-md-4",
                    widgets: [{
                        type: "linklist",
                        config: {
                            links: [{
                                title: "SCM-Manager",
                                href: "http://www.scm-manager.org"
                            }, {
                                title: "Github",
                                href: "https://github.com"
                            }, {
                                title: "Bitbucket",
                                href: "https://bitbucket.org"
                            }, {
                                title: "Stackoverflow",
                                href: "http://stackoverflow.com"
                            }]
                        },
                        title: "Links"
                    }]
                }, {
                    styleClass: "col-md-8",
                    widgets: [{
                        type: "linklist",
                        config: {
                            links: [{
                                title: "SCM-Manager",
                                href: "http://www.scm-manager.org"
                            }, {
                                title: "Github",
                                href: "https://github.com"
                            }, {
                                title: "Bitbucket",
                                href: "https://bitbucket.org"
                            }, {
                                title: "Stackoverflow",
                                href: "http://stackoverflow.com"
                            }]
                        },
                        title: "Links"
                    }]
                }]
            }]
        };
        vm.collapsible = false;
        vm.maximizable = false;
        vm.categories = true;

        //$scope.$on('adfDashboardChanged', function (event, name, model) {
        //    localStorageService.set(name, model);
        //});
      
    }

    dashCtrl.$inject = ['$scope', '$http'];

    angular.module('app')
    .controller('dashCtrl', dashCtrl);

})();