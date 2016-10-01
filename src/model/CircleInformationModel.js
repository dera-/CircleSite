export default class CircleInformationModel {
  constructor(sentence, icon) {
    this.initialize(sentence, icon);
  }

  initialize(sentence, icon) {
    this.sentence = sentence;
    this.icon = icon;
  }
}
