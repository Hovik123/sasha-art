angular.module("Art").config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/dashboard");
    //
    // Now set up the states

    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            controller:"DashboardController",
            templateUrl: "/administrator/app/engines/news/view/index.html"
        })
        .state('steps', {
            url: "steps",
            controller:"DashboardController",
            templateUrl: "/administrator/app/engines/news/view/index.html"
        });
});