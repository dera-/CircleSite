import CircleInfomationModel from '../model/CircleInformationModel';

const INFORMATION_ICON = 'star';
export default class CircleInformationModelFactory {
  static generateList(circleInfoData) {
    return circleInfoData.informations.map(text => {
      return new CircleInfomationModel(text, INFORMATION_ICON);
    });
  }
}
