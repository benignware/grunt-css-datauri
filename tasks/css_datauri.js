/*
 * grunt-css-datauri
 * https://github.com/benignware/grunt-css-datauri
 *
 * Copyright (c) 2014 Rafael Nowrotek
 * Licensed under the MIT license.
 */

'use strict';

var cssDataURISync = require('css-datauri').sync;

module.exports = function(grunt) {
    
  grunt.registerMultiTask('css_datauri', 'convert file-uris to data-uris', function() {
  	
    var options = this.options({
      // defaults
      exclude: []
    });
    
    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file ' + filepath + ' not found.');
          return false;
        } else {
          return true;
        }
      });

      if (src.length === 0) {
        grunt.log.warn('Destination ' + f.dest + ' not written because src files were empty.');
        return;
      }
      cssDataURISync(f.src[0], f.dest, options);
        
    });
  });
    
};