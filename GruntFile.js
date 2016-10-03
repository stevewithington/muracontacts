module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    handlebars: {
      all: {
        files: {
          'assets/src/js/templates/templates.js': ['assets/src/js/templates/*.hbs']
        },
        options: {
          namespace: '<%= pkg.name %>.templates',
          processName: function(filePath) {
            var name=filePath.split('/');
                name=name[name.length-1];
                name=name.split('.');
            return name[0].toLowerCase();
          }
        }
      }
    },

    // Required to work with Mura's Handlebars
    replace: {
      prevent_templates_example: {
        src: ['assets/src/js/templates/templates.js'],
        dest: 'assets/src/js/templates/templates.js',
        options: {
          processTemplates: false
        },
        replacements: [{
          from: 'Handlebars',
          to: function () {
            return 'window.mura.Handlebars';
          }
        }]
      }
    },

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

    watch: {
      scripts: {
        files: ['assets/src/js/**/*.js','assets/src/js/**/*.hbs'],
        tasks: ['handlebars','replace','concat','uglify']
      },
      less: {
        files: ['assets/src/css/less/*.less'],
        tasks: ['less']
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
          'assets/dist/css/<%= pkg.name %>.min.css': 'assets/src/css/less/<%= pkg.name %>.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['handlebars', 'replace', 'concat', 'uglify', 'less']); // may also add 'watch' to the list

};
