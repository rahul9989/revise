module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({

    // package
    pkg: grunt.file.readJSON('package.json'),

    // SASS to CSS
    sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'             // Expanded is used for Normal version of CSS.
          },
          files: {                         // Dictionary of files
            'wltProject/css/custom.css': 'wltProject/scss/tabs.scss',       // 'destination': 'source'
          }
        }
    },

    // concat javascript files
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['wltProject/js/angular.js', 'wltProject/js/custom.js'],
        dest: 'wltProject/js/main.js',
      },
    },

    // minify or "uglify" javascript files
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'wltProject/js/main.js',
        dest: 'wltProject/js/<%= pkg.name %>.min.js'
      }
    }

  });

  grunt.registerTask('default', ['sass', 'concat', 'uglify']);
  
}