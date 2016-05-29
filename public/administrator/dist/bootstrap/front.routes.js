angular.module("Art").config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            controller:"MainController",
            templateUrl: "/administrator/app/engines/auth/view/login.html"
        });
});