var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var typescript = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');
var del = require("del");
var bundler = require('aurelia-bundler');
var bundles = require('./build/bundles.js');
var nodemon = require('gulp-nodemon');

var typescriptCompiler = typescriptCompiler || null;

var config = {
    force: true,
    baseURL: '.',
    configPath: './config.js',
    bundles: bundles.bundles
};

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["dist"], cb);
});

/**
 * Builds client app.
 */
gulp.task('build:client', function () {
    typescriptCompiler = typescript.createProject('./client/tsconfig.json', {
        "typescript": require('typescript')
    });
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript(typescriptCompiler));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/client'));
});

/**
 * Builds server app.
 */
gulp.task('build:server', function () {
    typescriptCompiler = typescript.createProject('./server/tsconfig.json', {
        "typescript": require('typescript')
    });
    var tsResult = gulp.src('server/src/**/*.ts')
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(sourcemaps.init())
        .pipe(typescript(typescriptCompiler));
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/server'));
});

/**
 * Copy all resources that are not TypeScript files into build directory. e.g. index.html, css, images
 */
gulp.task("clientResources", () => {
    return gulp.src(["client/**/*", "!**/*.cmd", "!**/*.md", "!**/*.ts", "!client/typings", "!client/typings/**", "!client/*.json"])
        .pipe(gulp.dest("dist/client"));
});

gulp.task('bundle', function () {
    return bundler.bundle(config);
});

gulp.task('unbundle', function () {
    return bundler.unbundle(config);
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', ['start'], function () {
    gulp.watch(["client/**/*.ts"]).on('change', function (e) {
        runSequence('build:client', 'bundle');
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });

    gulp.watch(["client/**/*.html", "client/**/*.css"], ['clientResources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });

    gulp.watch(["server/src/**/*.ts"]).on('change', function (e) {
        runSequence('build:server', 'bundle');
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
});

gulp.task('set-dev-node-env', function () {
    console.log('setting env to development');
    return process.env.NODE_ENV = 'development';
});

/**
 * Build the project.
 * 1. Clean the build directory
 * 2. Build Express server
 * 3. Build the Angular app
 * 4. Copy the resources
 * 5. Copy the dependencies.
 */
gulp.task("build", function (callback) {
    runSequence('clean', 'build:server', 'build:client', 'clientResources',
        'bundle',
        callback);
});

gulp.task('start', ['build'], function () {
    nodemon({
        // verbose: true,
        ignore: 'dist/*',
        script: 'dist/server/server.js',
        env: {
            'NODE_ENV': 'development'
        }
    })
        .on('start', function onStart() {
            console.log('Start nodemon');
        })
        .on('restart', function onRestart() {
            setTimeout(function reload() {
                browserSync.reload();
            }, 500);
        });
});