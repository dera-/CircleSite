import * as ContentLinks from './ContentLinks';
export const SITE_HEADER = '<header class="mdl-layout__header">' +
    '<div class="mdl-layout__header-row">' +
      '<a class="mdl-layout-title mdl-navigation__link" href="{{ url }}">{{ title }}</a>' +
      '<div class="mdl-layout-spacer"></div>' +
      '<nav class="mdl-navigation mdl-layout--large-screen-only">' +
        ContentLinks.CONTENT_LINKS +
      '</nav>' +
    '</div>' +
  '</header>';
