var ContentSectionModel = function(title, description, image, imagePosition) {
  this.title = title;
  this.description = description;
  this.image = image;
  this.isLeftImage = imagePosition === 'left';
  this.isRightImage = imagePosition === 'right';
};

module.exports = ContentSectionModel;
