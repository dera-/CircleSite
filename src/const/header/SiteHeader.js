var contentLinks = require('./ContentLinks'),
  SiteHeader = '<header class="mdl-layout__header">' +
    '<div class="mdl-layout__header-row">' +
      '<a class="mdl-layout-title mdl-navigation__link" href="{{ url }}">{{ title }}</a>' +
      '<div class="mdl-layout-spacer"></div>' +
      '<nav class="mdl-navigation mdl-layout--large-screen-only">' +
        contentLinks +
      '</nav>' +
    '</div>' +
  '</header>';

module.exports = SiteHeader;