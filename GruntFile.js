module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['assets/src/js/**/*.js'],
        dest: 'assets/dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    less: {
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing.
          paths: ['assets/src/css/'],
          compress: true
        },
        files: {
          // compliation.css  :  source.less
          'assets/dist/css/<%= pkg.name %>.min.css': 'assets/src/css/less/muracontacts.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['assets/src/js/**/*.js'],
        tasks: ['concat','uglify']
      },
      less: {
        files: ['assets/src/css/less/*.less'],
        tasks: ['less']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify', 'less']); // may also add 'watch' to the list

};
