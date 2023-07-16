const absoluteUrl = require("./src/filters/abasoluteUrl");

module.exports = config => {

  config.addNunjucksFilter("absoluteUrl", absoluteUrl);

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: "_layouts",
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};