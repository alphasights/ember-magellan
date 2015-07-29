/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-magellan',

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'font-awesome/fonts/fontawesome-webfont.ttf'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'font-awesome/fonts/fontawesome-webfont.woff'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'font-awesome/fonts/fontawesome-webfont.woff2'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'font-awesome/fonts/fontawesome-webfont.svg'), {
      destDir: 'assets/fonts'
    });

    app.import(path.join(app.bowerDirectory, 'font-awesome/fonts/fontawesome-webfont.eot'), {
      destDir: 'assets/fonts'
    });
  }
};
