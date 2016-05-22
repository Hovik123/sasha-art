var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');

var dest = {
    app: "dist/"
};
var cleanPaths = [
    "dist/",
    "index.html"
];
var paths = {
    index: [
        "app/index.html"
    ],
    html: [
        "app/**/*.html",
        "!app/index.html"
    ],

    bowerJs: [
        "bower_components/jquery/dist/jquery.js",
        "bower_components/angular/angular.js",
        "bower_components/angular-ui-router/release/angular-ui-router.js",
        "bower_components/lodash/dist/lodash.js",
        "bower_components/restangular/dist/restangular.js",
        "bower_components/angular-animate/angular-animate.js",
        "bower_components/angular-aria/angular-aria.js",
        "bower_components/angular-messages/angular-messages.js",
        "bower_components/angular-material/angular-material.js",
        "bower_components/bootstrap-material-design/dist/js/material.js",
        "bower_components/angular-local-storage/dist/angular-local-storage.min.js"
    ],
    js:[
        "app/**/*.js",
        "!app/app.js"
    ],
    css:[
        "bower_components/bootstrap-material-design/dist/css/bootstrap-material-design.css"
    ],
    jsIndex:[
        "app/app.js"
    ]

};


gulp.task("copy", function () {

    //bower js concat
    gulp.src(paths.bowerJs)
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest(dest.app+"assets/js"));

    //copy html index
    gulp.src(paths.index)
        .pipe(gulp.dest(""));

    //html copy
    gulp.src(paths.html)
        .pipe(gulp.dest(dest.app));

    //js copy
    gulp.src(paths.js)
        .pipe(gulp.dest(dest.app));

    //js copy
    gulp.src(paths.jsIndex)
        .pipe(browserify())
        .pipe(gulp.dest(dest.app));

    //css copy
    gulp.src(paths.css)
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dest.app+"assets/css"));

});
gulp.task("watch", function () {
    gulp.watch(paths.bowerJs,["copy"]);
    gulp.watch(paths.css,["copy"]);
    gulp.watch(paths.index,["copy"]);
    gulp.watch(paths.html,["copy"]);
    gulp.watch(paths.js,["copy"]);
});
//clean
gulp.task("clean", function () {
    gulp.src(cleanPaths)
        .pipe(clean())
});
gulp.task("default", ["clean", "copy", "watch"]);