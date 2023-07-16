const absoluteUrl = require("./src/filters/abasoluteUrl");
const eleventySass = require("@grimlink/eleventy-plugin-sass");
const sass = require('sass');
const yaml = require("js-yaml");

module.exports = config => {
  // Custom filters
  config.addNunjucksFilter("absoluteUrl", absoluteUrl);
  
  // shortcodes
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  
  // sass
  config.addPlugin(eleventySass, { 
    sass,  
    outputPath: 'css'
  });

  // yaml data support
  config.addDataExtension("yaml", contents => yaml.load(contents));

  config.addPassthroughCopy({"src/public":"/"});

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