const IMAGE_LEFT_POSITION = 'left';
const IMAGE_RIGHT_POSITION = 'right';

export default class ContentSectionModel {
  constructor(title, description, image, imagePosition) {
    this.initialize(title, description, image, imagePosition);
  }

  initialize(title, description, image, imagePosition) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.isLeftImage = imagePosition === IMAGE_LEFT_POSITION;
    this.isRightImage = imagePosition === IMAGE_RIGHT_POSITION;
  }
}
