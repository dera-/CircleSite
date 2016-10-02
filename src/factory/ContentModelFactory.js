import ContentModel from '../model/ContentModel';

export default class ContentModelFactory {
  static generateList(contentsData) {
    return contentsData.contents.map(function(content) {
      return new ContentModel(content.title, content.overview, content.url, content.bg_image_class, content.update_time);
    });
  }
}