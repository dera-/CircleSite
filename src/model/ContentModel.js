export default class ContentModel {
  constructor(title, overview, url, bgImageClass, updateTime) {
    this.initialize(title, overview, url, bgImageClass, updateTime);
  }
  initialize(title, overview, url, bgImageClass, updateTime) {
    this.title = title;
    this.overview = overview;
    this.url = url;
    this.bgImageClass = bgImageClass;
    this.updateTime = updateTime;
  }
}
