var contentsData = require('../../../data/Contents.json'),
  ContentLinksArray = contentsData.contents.map(function(content) {
    return '<a class="mdl-navigation__link" href="' + content.url + '">' + content.title + '</a>';
  }),
  ContentLinks = ContentLinksArray.join("\n");

module.exports = ContentLinks;