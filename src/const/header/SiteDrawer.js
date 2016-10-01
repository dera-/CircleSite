import * as ContentLinks from './ContentLinks';
export const SITE_DRAWER = '<div class="mdl-layout__drawer">' +
    '<a class="mdl-layout-title mdl-navigation__link" href="{{ url }}">{{ title }}</a>' +
    '<nav class="mdl-navigation">' +
      ContentLinks.CONTENT_LINKS +
    '</nav>' +
  '</div>';
