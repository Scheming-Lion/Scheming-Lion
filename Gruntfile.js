module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
        src: [
          // './public/lib/*.js',libraries
          './public/client/app.js',// All JS in the libs folder
          './public/client/link.js',// All JS in the libs folder
          './public/client/links.js',// All JS in the libs folder
          './public/client/linkView.js',// All JS in the libs folder
          './public/client/linksView.js',// All JS in the libs folder
          './public/client/createLinkView.js',// All JS in the libs folder
          './public/client/router.js'// All JS in the libs folder
        ],
        dest: './public/dist/production.js'
      },
      libs: {
        src: [
          './public/lib/underscore.js',
          './public/lib/jquery.js',
          './public/lib/backbone.js',
          './public/lib/handlebars.js'
        ],
        dest: './public/dist/libraries.js'
      },
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    uglify: {
      dist: {
        src: './public/dist/production.js',
        dest: './public/dist/production.min.js'
      },
      libs: {
        src: './public/dist/libraries.js',
        dest: './public/dist/libraries.min.js'
      }
    },

    jshint: {
      files: [
        'public/client/*.js'
      ],
      options: {
        force: 'false',
        jshintrc: '.jshintrc',
        ignores: [
          'public/lib/**/*.js',
          'public/dist/**/*.js'
        ]
      }
    },

    cssmin: {
    },

    watch: {
      scripts: {
        files: [
          'public/client/**/*.js',
          'public/lib/**/*.js',
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'public/*.css',
        tasks: ['cssmin']
      }
    },

    shell: {
      prodServer: {
        command: 'git push azure master'
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    'mochaTest'
  ]);

  grunt.registerTask('build', ['jshint', "mochaTest", 'concat', 'uglify']);

  grunt.registerTask('deploy', function(n) {

    if(grunt.option('prod')) {
      grunt.task.run(['build']);
      grunt.task.run(['shell']);
      // add your production server task here
    } else {
      grunt.task.run(['build']);
      grunt.task.run([ 'server-dev' ]);
    }
  });

  // grunt.registerTask('deploy', [
  //   // add your deploy tasks here
  // ]);


};
