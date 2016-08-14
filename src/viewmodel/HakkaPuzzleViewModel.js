var siteHeaderTemplate = require('../const/header/SiteHeader'),
  siteDrawerTemplate = require('../const/header/SiteDrawer'),
  siteFooterTemplate = require('../const/footer/SiteFooter'),
  ContentSectionModel = require('../model/ContentSectionModel'),
  UserAgentUtil = require('../util/UserAgentUtil'),
  contentSectionData = require('../../data/ContentSectionData.json'),
  userAgentUtil = new UserAgentUtil(),
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
      if (userAgentUtil.isAndroid(navigator.userAgent)) {
        location.href = './download/hakkapuzzle.apk'
      } else {
        location.href = './download/hakkapuzzle.jar'
      }
    }
  },
  computed:{
    isMobile: function() {
      console.log(navigator.userAgent);
      return userAgentUtil.isMobile(navigator.userAgent);
    },
    isIOs: function() {
      return userAgentUtil.isIOs(navigator.userAgent);
    }
  }
});
