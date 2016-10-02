import ContentsCommonViewModel from '../ContentsCommonViewModel';
import UserAgentUtil from '../../util/UserAgentUtil';
import CircleInformationModelFactory from '../../factory/CircleInformationModelFactory';
import ContentModelFactory from '../../factory/ContentModelFactory';
import circleInfoData from '../../../data/CircleInfo.json';
import contentsData from '../../../data/Contents.json';

const userAgentUtil = new UserAgentUtil();
console.log(circleInfoData);
const circleInfoList = CircleInformationModelFactory.generateList(circleInfoData);
const contentModelList = ContentModelFactory.generateList(contentsData);

ContentsCommonViewModel.render();

new Vue({
  el: '#index-app',
  data: {
    topPageContents: contentModelList,
    circleInfomations: circleInfoList
  },
  methods: {
    jumpToUrl: (url) => {
      location.href = url;
    }
  },
  computed: {
    isMobile: () => {
      return userAgentUtil.isMobile(navigator.userAgent);
    }
  }
});
