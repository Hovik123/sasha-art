(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
angular.module("Art").config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('Art')
        .setStorageType('sessionStorage');
});
},{}],2:[function(require,module,exports){
require("../controllers/MainController");
require("../controllers/DashboardController");
},{"../controllers/DashboardController":4,"../controllers/MainController":5}],3:[function(require,module,exports){
require("../factory/Auth");
},{"../factory/Auth":6}],4:[function(require,module,exports){
angular.module("Art").controller("DashboardController",
    ["$scope", "$rootScope", "localStorageService", "$location", "Restangular", function ($scope, $rootScope, localStorageService, $location, Restangular) {

    }]);
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){

},{}],7:[function(require,module,exports){
var dep = [
    "LocalStorageModule",
    "ui.router",
    "restangular"
];
angular.module("Art", dep);
require("./bootstrap/config");

require("./bootstrap/controller");
require("./bootstrap/fatory");

},{"./bootstrap/config":1,"./bootstrap/controller":2,"./bootstrap/fatory":3}]},{},[7])