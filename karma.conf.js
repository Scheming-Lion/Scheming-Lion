// Karma configuration
// Generated on Mon Jun 30 2014 19:35:20 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // angular source
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-ui-router/release/angular-ui-router.min.js',
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/requirejs/require.js',
      'client/lib/angular-mocks/angular-mocks.js',

      // our app code to be tested
      'client/top100visual/*.js',
      'client/search/*.js',
      'client/main/*.js',

      // our spec files
      'node_modules/expect.js/index.js',
      'testing/unit/*.js'
    ],


    // list of files to exclude
    exclude: [
        'karma.conf.js'
    ],

    coverageReporter: {
      dir: 'testing/reports/coverage',
      subdir: '.'
    },

    htmlReporter: {
      outputFile: 'testing/reports/specRunner.html'
    },


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    
    // tested app code should also be added here
    // for coverage reporting
    preprocessors: {
      'client/top100visual/*.js': 'coverage',
      'client/search/*.js': 'coverage',
      'client/main/*.js': 'coverage',
      'client/trackPost.js': 'coverage',
      'client/trackUser.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'html'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
