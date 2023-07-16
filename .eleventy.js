const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require('sass');
const absoluteUrl = require("./src/filters/abasoluteUrl");

module.exports = config => {
  // Custom filters
  config.addNunjucksFilter("absoluteUrl", absoluteUrl);
  
  // sass
  config.addPlugin(eleventySass, { 
    sass,  
    outputPath: 'css'
  });


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