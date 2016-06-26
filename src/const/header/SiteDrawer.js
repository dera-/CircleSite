var contentLinks = require('./ContentLinks'),
  SiteDrawer = '<div class="mdl-layout__drawer">' +
    '<a class="mdl-layout-title mdl-navigation__link" href="{{ url }}">{{ title }}</a>' +
    '<nav class="mdl-navigation">' +
      contentLinks +
    '</nav>' +
  '</div>';

module.exports = SiteDrawer;