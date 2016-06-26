var ContentModel = function(title, overview, url, bgImageClass, updateTime) {
  this.title = title;
  this.overview = overview;
  this.url = url;
  this.bgImageClass = bgImageClass;
  this.updateTime = updateTime;
};

module.exports = ContentModel;
