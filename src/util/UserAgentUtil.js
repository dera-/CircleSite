const IOS_AGENTS = ['iphone', 'ipad', 'ipod'];
const MOBILE_AGENTS = ['mobile', 'phone', 'blackberry', 'iphone', 'ipod'];

export default class UserAgentUtil {
  static isIOs(ua) {
    return IOS_AGENTS.some(agent => ua.indexOf(agent) !== -1);
  }

  static isAndroid(ua) {
    return ua.indexOf('android') !== -1;
  }

  static isMobile(ua) {
    return MOBILE_AGENTS.some(agent => ua.indexOf(agent) !== -1);
  }
}
