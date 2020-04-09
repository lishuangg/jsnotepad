module.exports = function (grunt) {
    grunt.initConfig({
    htmlmin: {
      options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                      
      },
      files: {
          src: './index.html',
          dest: 'dist/index.html'                            
      }    
    },
    cssmin: {
        'dist/css/common.css': './css/common.css',
        'dist/dlg-font/dlg-font.css': './dlg-font/dlg-font.css',
        'dist/font-list/font-list.css': './font-list/font-list.css',
        'dist/editor/editor.css':'./editor/editor.css',
        'dist/menu-bar/menu-bar.css':'./menu-bar/menu-bar.css',
    },
    uglify: {
      release:{
        files: {
            'dist/dlg-font/dlg-font.js': './dlg-font/dlg-font.js',
            'dist/font-list/font-list.js': './font-list/font-list.js',
            'dist/menu-bar/menu-bar.js':'./menu-bar/menu-bar.js',
            'dist/menu-bar/menu-data.js':'./menu-bar/menu-data.js',
            'dist/editor/editor.js':'./editor/editor.js',
        }
      }         
    }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify','cssmin','htmlmin']);
  };