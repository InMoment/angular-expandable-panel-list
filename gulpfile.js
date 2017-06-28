var gulp = require('gulp');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var tslint = require('gulp-tslint');
var ddescribeIit = require('gulp-ddescribe-iit');
var rollup = require('gulp-rollup');
var del = require('del');
var exec = require('child_process').exec;
var path = require('path');
var os = require('os');
var asyncDone = require('async-done');
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');
var gulpFile = require('gulp-file');
var shell = require('gulp-shell');

var PATHS = {
  src : 'src/**/*.ts',
  srcIndex : 'src/index.ts',
  specs : 'src/**/*.spec.ts',
  testHelpers : 'src/test/**/*.ts',
  demo : 'demo/**/*.ts',
  demoDist : 'demo/dist/**/*',
  typings : 'typings/index.d.ts',
  jasmineTypings : 'typings/globals/jasmine/index.d.ts',
  coverageJson : 'coverage/json/coverage-final.json'
};

function platformPath(path) {
  return /^win/.test(os.platform()) ? `${path}.cmd` : path;
}

gulp.task('lint', function() {
  return gulp.src(PATHS.src)
      .pipe(tslint({ formatter : 'prose'}))
      .pipe(tslint.report({summarizeFailureOutput : true}));
});

gulp.task('ddescribe-iit', function() {
  return gulp.src(PATHS.specs).pipe(ddescribeIit({allowDisabledTests : false}));
});

gulp.task('clean:tests', function() { return del([ 'temp/', 'coverage/' ]); });

gulp.task('build:tests', [ 'clean:tests' ], (cb) => {
  exec(path.join(__dirname, platformPath('/node_modules/.bin/tsc')), (e) => {
    if (e)
      console.log(e);
    cb();
  }).stdout.on('data', function(data) { console.log(data); });
});

gulp.task('test', [ 'build:tests' ], function(done) {
  startKarmaServer(false, false, () => {
    asyncDone(() => {
      return gulp.src(PATHS.coverageJson).pipe(remapIstanbul({
        reports : {'html' : 'coverage/html'}
      }));
    }, done);
  });
});

function startKarmaServer(isTddMode, isSaucelabs, done) {
  var karmaServer = require('karma').Server;
  var travis = process.env.TRAVIS;

  var config = {
    configFile : `${__dirname}/karma.conf.js`,
    singleRun : !isTddMode,
    autoWatch : isTddMode
  };

  /*if (process.argv.indexOf('--headless')) {
    config['browsers'] = [ 'Chrome_headless' ];
  }*/

  new karmaServer(config, done).start();
}

gulp.task('clean:build', function() { return del(['dist/', 'build/']); });

gulp.task('clean:demo', function() { return del(['demo/dist']); });

gulp.task('styles', function() {
  return gulp.src('./src/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./dist/styles'));
});

gulp.task('ngc', function(cb) {
  var executable = path.join(__dirname, platformPath('/node_modules/.bin/ngc'));
  exec(`${executable} -p ./tsconfig-es2015.json`, (e) => {
    if (e)
      console.log(e);
    del('./dist/waste');
    cb();
  }).stdout.on('data', function(data) { console.log(data); });
});

gulp.task('rollup', function(cb) {
  var executable = path.join(__dirname, platformPath('/node_modules/.bin/rollup'));
  exec(`${executable} build/angular-expandable-panel-list.js -c rollup.config.js -o dist/angular-expandable-panel-list.js`, (e) => {
    if (e)
      console.log(e);
    gulp.src('build/**/!(*.js)')
        .pipe(gulp.dest('./dist'));
    cb();
  }).stdout.on('data', function(data) { console.log(data); });
});

gulp.task('npm', function() {
  var pkgJson = require('./package.json');
  var targetPkgJson = {};
  var fieldsToCopy = [
    'version', 'description', 'keywords', 'author', 'repository', 'license',
    'bugs', 'homepage'
  ];

  targetPkgJson['name'] = 'accordion';

  fieldsToCopy.forEach(function(field) {
    targetPkgJson[field] = pkgJson[field];
  });

  targetPkgJson['module'] = 'accordion.js';
  targetPkgJson['typings'] = 'accordion.d.ts';

  targetPkgJson.peerDependencies = {};
  Object.keys(pkgJson.dependencies).forEach(function(dependency) {
    targetPkgJson.peerDependencies[dependency] =
        `^${pkgJson.dependencies[dependency]}`;
  });

  return gulp.src('README.md')
      .pipe(gulpFile('package.json', JSON.stringify(targetPkgJson, null, 2)))
      .pipe(gulp.dest('dist'));
});

gulp.task('build:demo',['clean:demo'],shell.task(['webpack --config demo/webpack.config.js --progress --profile --bail'],{env: {MODE:'build'}}));

gulp.task('demo-server', [], shell.task([
  'webpack-dev-server --port 9090 --config demo/webpack.config.js --inline --progress'
]));

gulp.task('build', function(done) {
  runSequence('lint', 'ddescribe-iit', 'test', 'clean:build',
              'ngc', 'rollup', 'styles', 'npm', done);
});