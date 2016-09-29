module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'assets/js/dist/muracontacts.min.js': ['assets/js/dist/muracontacts.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/src/muracontacts.js'],
        tasks: ['default']
      },
      less: {
        files: ['assets/css/less/*.less'],
        tasks: ['less']
      }
    },
    less: {
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing.
          // Default value is the directory of the source, which is probably what you want.
          paths: ['assets/css/'],
          compress: true
        },
        files: {
          // compliation.css  :  source.less
          'assets/css/muracontacts.min.css': 'assets/css/less/muracontacts.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['uglify', 'less']); // may also add 'watch' to the list

};
