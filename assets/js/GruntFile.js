module.exports = function(grunt) {

  grunt.initConfig({
      handlebars: {
          all: {
              files: {
                  'src/templates.js': ['src/templates/*.hb']
              },
              options: {
                   namespace: 'mura.templates',
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
                src: ['src/templates.js'],
                dest: 'src/templates.js',
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
            'src/templates.js',
            'src/muracontacts.js'
            ],
            dest: 'dist/muracontacts.js',
          },
    },
    uglify: {
      my_target: {
        files: {
          'dist/muracontacts.min.js': ['dist/muracontacts.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.registerTask('default',['handlebars','replace','concat','uglify']);


};
