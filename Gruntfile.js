module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    nodemon: {
      dev: {
        script: 'server/server.js'
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
            command: ['cd coverage/'].join('&&')
        }
    },

    watch: {
      scripts: {
        files: [
          'server/*.js',
          'server/**/*.js',
          'scraper/*.js',
          'scraper/*.html',
          'scraper/client/*.js',
          'scraper/client/*.html',
          'scraper/client/*.html',
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
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', ['karma']);

  grunt.registerTask('build', []);

  grunt.registerTask('deploy', function(n) {
    if(grunt.option('prod')) {
      // add your production server task here
    } else {
      // add your dev server task here
    }
  });
};
