module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.JSON'),

    uglify: {
      my_target: {
        files: {
          'build/js/script.js': ['components/js/*.js']
          }//  files
        }//my_target
      },//uglify

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        }//options
      }//dev
    },//compass

    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },//options
      multiple_files: {
        expand: true,
        flatten: true,
        src: 'build/css/*.css',
        dest: 'build/css'
      }
    },

    connect: {
      sever: {
        options: {
          hostname: 'localhost',
          port: 9999,
          livereload: 35729,
          open: true,
          base: 'build'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },//options
      script: {
        files: ['components/js/*.js'],
        tasks: ['uglify']
      },//script
      html: {
        files: ['build/*.html'],
      },//html
      css: {
        files: ['components/sass/**/*.scss'],
        tasks: ['compass', 'autoprefixer']
      }//css
    }//watch
  });//grunt

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['connect', 'watch']);

};//exports
