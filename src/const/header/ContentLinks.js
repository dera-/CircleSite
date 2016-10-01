import contentsData from '../../../data/Contents.json';
const getContentLinks = () => {
  const contentLinksArray =
    contentsData.contents.map((content) => '<a class="mdl-navigation__link" href="' + content.url + '">' + content.title + '</a>');
  return contentLinksArray.join("\n");
};
export const CONTENT_LINKS = getContentLinks();
