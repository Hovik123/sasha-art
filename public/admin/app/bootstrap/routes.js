angular.module("Art").config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/state1");
    //
    // Now set up the states
    $stateProvider
        .state('state1', {
            url: "/state1",
            templateUrl: "/admin/app/engines/news/view/index.html"
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "/admin/app/engines/news/view/index.html"
        })
        .state('state3', {
            url: "/state3",
            templateUrl: "/admin/app/engines/news/view/index.html"
        })
        .state('state4', {
            url: "/state4",
            templateUrl: "/admin/app/engines/news/view/index.html"
        })
        .state('state5', {
            url: "/state5",
            templateUrl: "/admin/app/engines/news/view/index.html"
        })
    ;
});