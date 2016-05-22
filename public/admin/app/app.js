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
