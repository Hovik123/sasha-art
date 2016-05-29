var dep = [
    "LocalStorageModule",
    "ui.router",
    "restangular"
];
angular.module("Art", dep);
require("./bootstrap/config");

require("./bootstrap/controller");
require("./bootstrap/fatory");
