module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // paths loaded by Karma
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/long-stack-trace-zone.js',
      'node_modules/zone.js/dist/proxy.js',
      'node_modules/zone.js/dist/sync-test.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
      {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},
      // Include a Material theme in the test suite.
      {pattern: 'node_modules/@angular/material/prebuilt-themes/indigo-pink.css', included: true, watched: true},
      {pattern: 'node_modules/@angular/**/*', included: false, watched: false},
      {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: true},
      {pattern: 'node_modules/reflect-metadata/Reflect.js', include: true },
      {pattern: 'karma-test-shim.js', included: true, watched: true},
      // paths loaded via module imports
      {pattern: 'temp/**/*.js', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'src/**/*.ts', included: false, watched: false},
      {pattern: 'temp/**/*.js.map', included: false, watched: false}
    ],

    preprocessors: {
      'temp/**/*.js': 'sourcemap',
      'temp/**/!(*.spec|*.module).js': 'coverage'
    },

    customLaunchers: {
      Chrome_headless: {
        base: 'Chrome',
        flags: ['--headless','--disable-gpu','--remote-debugging-port=9222']
      }
    },

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
        type: 'json',
        dir: 'coverage',
        subdir: 'json',
        file: 'coverage-final.json'
      }]
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    captureTimeout: 60000,
    browserDisconnectTimeout: 60000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000
  });
};
