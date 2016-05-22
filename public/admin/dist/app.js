(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("Art").config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('Art')
        .setStorageType('sessionStorage');
});
},{}],2:[function(require,module,exports){
require("../controllers/MainController");
},{"../controllers/MainController":5}],3:[function(require,module,exports){
require("../factory/Storage");
},{"../factory/Storage":6}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
angular.module("Art").controller("MainController",
    ["$scope", "$rootScope","localStorageService","$location", function ($scope, $rootScope,localStorageService,$location) {
        $.material.init();
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {

                console.log(localStorageService.get("auth"));
                localStorageService.set("auth",11);
            })
    }]);
},{}],6:[function(require,module,exports){
angular.module("Art").factory("Storage",function(){

});
},{}],7:[function(require,module,exports){
var dep = [
    "LocalStorageModule",
    "ui.router",
    "ngMaterial"
];
angular.module("Art", dep);
require("./bootstrap/config");

require("./bootstrap/routes");
require("./bootstrap/controller");
require("./bootstrap/fatory");

},{"./bootstrap/config":1,"./bootstrap/controller":2,"./bootstrap/fatory":3,"./bootstrap/routes":4}]},{},[7])