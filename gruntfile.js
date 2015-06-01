module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
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

    watch: {
      options: {
        livereload: true,
      },//options
      script: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      },//script
      html: {
        files: ['*.html'],
      },//html
      css: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass']
      }//css
    }//watch
  });//grunt

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['watch']);

};//exports
