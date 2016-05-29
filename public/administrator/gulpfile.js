var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var sass = require('gulp-sass');

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
        "bower_components/angular-local-storage/dist/angular-local-storage.min.js",
        "bower_components/Materialize/bin/materialize.js"
    ],
    js:[
        "app/**/*.js",
        "!app/app.js",
    ],
    jsIndex:[
        "app/app.js"
    ],
    fonts:[
        "bower_components/Materialize/fonts/**/*.*"
    ],
    scss:[
        "assets/scss/style.sass"
    ],
    images:[
        "assets/images/*.*"
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

    gulp.src(paths.fonts)
        .pipe(gulp.dest(dest.app+"assets/fonts"));
    gulp.src(paths.images)
        .pipe(gulp.dest(dest.app+"assets/images"));


    //js copy
    gulp.src(paths.jsIndex)
        .pipe(browserify())
        .pipe(gulp.dest(dest.app));
});
gulp.task("watch", function () {
    gulp.watch(paths.bowerJs,["copy"]);
    gulp.watch(paths.index,["copy"]);
    gulp.watch(paths.html,["copy"]);
    gulp.watch(paths.js,["copy"]);
    gulp.watch(["assets/scss/*.sass","assets/scss/**/*.sass"],["sass"])
});
gulp.task('sass', function () {
    return gulp.src(paths.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dest.app+"assets/css"));
});
//clean
gulp.task("clean", function () {
    gulp.src(cleanPaths)
        .pipe(clean())
});
gulp.task("default", ["clean", "copy","sass","watch"]);