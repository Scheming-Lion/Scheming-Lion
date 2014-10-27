module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'app.js'
      }
    },

    karma: {
      all: {
        configFile: 'karma.conf.js'
      }
    },

    shell: {
        options: {
        },
        target: {
            command: ['cd testing', 'cd reports', 'open specRunner.html', 'cd coverage', 'open index.html'].join('&&')
        }
    },

    watch: {
      scripts: {
        files: [
          'server/*.js',
          'server/**/*.js',
          'client/*.html',
        ],
        tasks: ['karma']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-shell');

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
  // Forcing so karma will run/report even if a test fails
  ///////////////////////////////////////////////////

  grunt.registerTask('forceOn', 'turns the --force option ON',
    function() {
      if ( !grunt.option( 'force' ) ) {
        grunt.config.set('forceStatus', true);
        grunt.option( 'force', true );
      }
    });

  grunt.registerTask('forceOff', 'turns the --force option Off',
    function() {
      if ( grunt.config.get('forceStatus') ) {
        grunt.option( 'force', false );
      }
    });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask( 'test', ['forceOn','karma', 'forceOff', "shell"] );

  grunt.registerTask('build', [] );

  grunt.registerTask('deploy', function(n) {
    if( grunt.option('prod') ) {
      // add your production server task here
      grunt.registerTask(['build']);
    } else {
      // add your dev server task here
      grunt.task.run(['build']);
      grunt.task.run(['server-dev']);
    }
  });
};
