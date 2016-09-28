module.exports = function(grunt) {

  grunt.initConfig({
      handlebars: {
          all: {
              files: {
                  'assets/js/src/templates.js': ['assets/js/src/templates/*.hb','assets/js/src/templates/*.hbs']
              },
              options: {
                   namespace: 'muracontacts.templates',
                   processName: function(filePath) {
                    var name=filePath.split('/');
                    name=name[name.length-1];
                    name=name.split('.');
                    return name[0].toLowerCase();
                  }
              }
          }
      },
      replace: {
        prevent_templates_example: {
                src: ['assets/js/src/templates.js'],
                dest: 'assets/js/src/templates.js',
                options: {
                  processTemplates: false
                },
                replacements: [{
                      from: 'Handlebars',
                      to: function () {
                        return "window.mura.Handlebars";
                      }
                }]
            }
        },
    concat: {
          options: {
            separator: ';',
          },
          dist: {
            src: [
            'assets/js/src/templates.js',
            'assets/js/src/muracontacts.js'
            ],
            dest: 'assets/js/dist/muracontacts.js',
          },
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/dist/muracontacts.min.js': ['assets/js/dist/muracontacts.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['assets/js/src/muracontacts.js','assets/js/src/templates/*.hbs'],
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

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['handlebars','replace','concat','uglify','less']); // may also add 'watch' to the list
};
