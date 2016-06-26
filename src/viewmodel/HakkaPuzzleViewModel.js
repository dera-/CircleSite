var siteHeaderTemplate = require('../const/header/SiteHeader'),
  siteDrawerTemplate = require('../const/header/SiteDrawer'),
  siteFooterTemplate = require('../const/footer/SiteFooter'),
  ContentSectionModel = require('../model/ContentSectionModel'),
  contentSectionData = require('../../data/ContentSectionData.json'),
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
  el: '#hakka-puzzle-app',
  data: {
    contentSections: contentSectionModelList,
  },
  methods: {
    download: function() {
      var ua = navigator.userAgent,
        spAgentList = ['Android', 'Mobile', 'Windows Phone'],
        applicationUrl;
      if (spAgentList.some(function(agent){return ua.indexOf(agent) > 0})) {
        applicationUrl = './download/hakkapuzzle.apk'
      } else {
        applicationUrl = './download/hakkapuzzle.jar'
      }
      location.href = applicationUrl;
    }
  }
});
