angular.module("Art").controller("MainController",
    ["$scope", "$rootScope","localStorageService","$location", function ($scope, $rootScope,localStorageService,$location) {
        $.material.init();
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {

                console.log(localStorageService.get("auth"));
                localStorageService.set("auth",11);
            })
    }]);