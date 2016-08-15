var siteHeaderTemplate = require('../const/header/SiteHeader'),
  siteDrawerTemplate = require('../const/header/SiteDrawer'),
  siteFooterTemplate = require('../const/footer/SiteFooter'),
  ContentSectionModel = require('../model/ContentSectionModel'),
  contentSectionData = require('../../data/ReinforceContentData.json'),
  contentSectionModelList = contentSectionData.sections.map(function(section) {
    return new ContentSectionModel(section.title, section.description, section.image, section.imagePosition);
  });

Vue.component('site-header', {
  props: ['title', 'url'],
  template: siteHeaderTemplate
});

Vue.component('site-drawer', {
  props: ['title', 'url'],
  template: siteDrawerTemplate
});

Vue.component('site-footer', {
  props: ['title'],
  template: siteFooterTemplate
});

new Vue({
  el: '#reinforce-app',
  data: {
    contentSections: contentSectionModelList,
  }
});