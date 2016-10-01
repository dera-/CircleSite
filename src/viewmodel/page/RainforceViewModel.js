import ContentsCommonViewModel from '../ContentsCommonViewModel';
import ContentSectionModelFactory from '../../factory/ContentSectionModelFactory';
import contentSectionData from '../../../data/ReinforceContentData.json';

const contentSectionModelList = ContentSectionModelFactory.generateList(contentSectionData);

ContentsCommonViewModel.render();

new Vue({
  el: '#reinforce-app',
  data: {
    contentSections: contentSectionModelList
  }
});
