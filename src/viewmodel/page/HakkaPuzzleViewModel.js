import ContentsCommonViewModel from '../ContentsCommonViewModel';
import UserAgentUtil from '../../util/UserAgentUtil';
import ContentSectionModelFactory from '../../factory/ContentSectionModelFactory';
import contentSectionData from '../../../data/ContentSectionData.json';

const userAgentUtil = new UserAgentUtil();
const contentSectionModelList = ContentSectionModelFactory.generateList(contentSectionData);

ContentsCommonViewModel.render();

new Vue({
  el: '#hakka-puzzle-app',
  data: {
    contentSections: contentSectionModelList
  },
  methods: {
    download: () => {
      if (userAgentUtil.isAndroid(navigator.userAgent)) {
        location.href = './download/hakkapuzzle.apk'
      } else {
        location.href = './download/hakkapuzzle.jar'
      }
    }
  },
  computed: {
    isMobile: () => {
      console.log(navigator.userAgent);
      return userAgentUtil.isMobile(navigator.userAgent);
    },
    isIOs: () => {
      return userAgentUtil.isIOs(navigator.userAgent);
    }
  }
});
