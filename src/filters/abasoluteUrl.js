const { URL } = require("url");

module.exports = function(url, base) {
  try {
    return (new URL(url, base)).toString()
  } catch(e) {
    // TODO add debug output!
    return url;
  }
};