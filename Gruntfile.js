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
        'dist/dlg-goto/dlg-goto.css':'./dlg-goto/dlg-goto.css',
        'dist/dlg-search/dlg-search.css':'./dlg-search/dlg-search.css',
        'dist/dlg-replace/dlg-replace.css':'./dlg-replace/dlg-replace.css',
        'dist/menu-bar/menu-bar.css':'./menu-bar/menu-bar.css',
    },
    uglify: {
      release:{
        files: {
            'dist/dlg-font/dlg-font.js': './dlg-font/dlg-font.js',
            'dist/font-list/font-list.js': './font-list/font-list.js',
            'dist/dlg-goto/dlg-goto.js':'./dlg-goto/dlg-goto.js',
            'dist/dlg-search/dlg-search.js':'./dlg-search/dlg-search.js',
            'dist/dlg-replace/dlg-replace.js':'./dlg-replace/dlg-replace.js',
            'dist/menu-bar/menu-bar.js':'./menu-bar/menu-bar.js',
            'dist/menu-data/menu-data.js':'./menu-data/menu-data.js',
        }
      }         
    }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify','cssmin','htmlmin']);
  };