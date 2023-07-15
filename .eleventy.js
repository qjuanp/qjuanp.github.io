module.exports = config => {
    return {
      dir: {
        input: 'src',
        output: '_site',
      },
      markdownTemplateEngine: 'njk',
      dataTemplateEngine: 'njk',
      htmlTemplateEngine: 'njk',
    };
  };