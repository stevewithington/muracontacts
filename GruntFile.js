module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['assets/js/src/**/*.js'],
        // the location of the resulting JS file
        dest: 'assets/js/dist/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'assets/js/dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    less: {
      development: {
        options: {
          // Specifies directories to scan for @import directives when parsing.
          // Default value is the directory of the source, which is probably what you want.
          paths: ['assets/css/src/'],
          compress: true
        },
        files: {
          // compliation.css  :  source.less
          'assets/css/dist/<%= pkg.name %>.min.css': 'assets/css/src/less/muracontacts.less'
        }
      }
    },

    watch: {
      scripts: {
        files: ['assets/js/src/**/*.js'],
        tasks: ['contact','uglifiy']
      },
      less: {
        files: ['assets/css/less/*.less'],
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
