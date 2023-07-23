const absoluteUrl = require("./src/filters/abasoluteUrl");
const blogPlugin = require('./src/plugins/.eleventy.blog.js')

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

  config.addPassthroughCopy({"../site/public":"/"});

  // additional plugins
  config.addPlugin(blogPlugin)

  return {
    dir: {
      input: 'content',
      output: '_site',
      includes: '../site/_includes',
      layouts: "../site/_layouts",
      data: "../data"
    },
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
  };
};