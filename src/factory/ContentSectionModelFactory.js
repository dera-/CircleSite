import ContentSectionModel from '../model/ContentSectionModel';

export default class ContentSectionModelFactory {
  static generateList(contentSectionData) {
    return contentSectionData.sections.map((section) => {
      return new ContentSectionModel(section.title, section.description, section.image, section.imagePosition);
    });
  }
}
