angular.module("Art").config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('Art')
        .setStorageType('sessionStorage');
});