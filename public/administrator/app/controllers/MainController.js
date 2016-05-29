angular.module("Art").controller("MainController",
    ["$scope", "$rootScope", "localStorageService", "$location", "Restangular", "$state", function ($scope, $rootScope, localStorageService, $location, Restangular, $state) {
        //$.material.init();
        $rootScope.authentificated = false;
        $scope.login = function (params) {
            Restangular.all("login").post(params).then(function (data) {
                if (data.status == "success") {
                    localStorageService.set("auth", data.response.token);
                    window.location.href="/dashboard#/dashboard";
                }
            });
        };

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {

            });
    }]);