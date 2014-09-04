var liveReload = require('connect-livereload');
var mountFolder = function(connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function(grunt) {
  // Load all plugins named with the "grunt-" prefix
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      reload: {
        files: [
          '_src/**/*.html',
          '_src/**/*.{js,jpg,png,gif,svg,ico}'
        ],
        options: {
          livereload: true
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0'
      },
      server: {
        options: {
          middleware: function(connect) {
            return [
              liveReload(),
              mountFolder(connect, '_src')
            ];
          }
        }
      },
    },

    buildcontrol: {
      options: {
        dir: '_build',
        commit: true,
        push: true,
        message: 'Build from commit %sourceCommit% on branch %sourceBranch%'
      },
      build: {
        options: {
          // Replace remote with your own repo
          remote: 'git@github.com:jancantor/grunt-email-template.git',
          branch: 'gh-pages'
        }
      }
    },

    copy: {
      build: {
        files: [
          {expand: true, cwd: '_src/', src: ['*.html'], dest: '_build/'},
          {expand: true, cwd: '_src/', src: ['img/**'], dest: '_build/'},
          {expand: true, dot: true, src: ['.gitignore'], dest: '_build/'}
        ]
      }
    }
  });

  grunt.registerTask('server', function(target) {
    grunt.task.run([
      'connect',                // start the server
      'watch'                   // watch for file changes
    ]);
  });

  grunt.registerTask('build', [
    'copy',                     // copy all other files
    'buildcontrol:build'        // deploy to git remotely
  ]);

  grunt.registerTask('default', 'build');
}