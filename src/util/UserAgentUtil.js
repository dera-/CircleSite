var iOsAgents = ['iphone', 'ipad', 'ipod'],
  mobileAgents = ['mobile', 'phone', 'blackberry', 'iphone', 'ipod'],
  UserAgentUtil = function() {};

UserAgentUtil.prototype = {
  isIOs: function(ua) {
    return iOsAgents.some(function(agent){return ua.indexOf(agent) !== -1});
  },
  isAndroid: function(ua) {
    return ua.indexOf('android') !== -1;
  },
  isMobile: function(ua) {
    return mobileAgents.some(function(agent){return ua.indexOf(agent) !== -1});
  }
};
module.exports = UserAgentUtil;
