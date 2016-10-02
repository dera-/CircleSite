import * as SiteHeaderTemplate from '../const/header/SiteHeader';
import * as SiteDrawerTemplate from '../const/header/SiteDrawer';
import * as SiteFooterTemplate from '../const/footer/SiteFooter';

export default class ContentsCommonViewModel {
  static render() {
    Vue.component('site-header', {
      props: ['title', 'url'],
      template: SiteHeaderTemplate.SITE_HEADER
    });

    Vue.component('site-drawer', {
      props: ['title', 'url'],
      template: SiteDrawerTemplate.SITE_DRAWER
    });

    Vue.component('site-footer', {
      props: ['title'],
      template: SiteFooterTemplate.SITE_FOOTER
    });
  }
}
