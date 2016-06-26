var ContentModel = require('../model/ContentModel'),
  CircleInfomationModel = require('../model/CircleInfomationModel'),
  siteHeaderTemplate = require('../const/header/SiteHeader'),
  siteDrawerTemplate = require('../const/header/SiteDrawer'),
  siteFooterTemplate = require('../const/footer/SiteFooter'),
  contentsData = require('../../data/Contents.json'),
  circleInfoData = require('../../data/CircleInfo.json'),
  contentModelList = contentsData.contents.map(function(content) {
    return new ContentModel(content.title, content.overview, content.url, content.bg_image_class, content.update_time);
  }),
  circleInfoList = circleInfoData.infomations.map(function(text) {
    return new CircleInfomationModel(text, 'star');
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
  el: '#index-app',
  data: {
    topPageContents: contentModelList,
    circleInfomations: circleInfoList
  },
  methods: {
    jumpToUrl: function(url) {
      location.href = url;
    }
  }
});
