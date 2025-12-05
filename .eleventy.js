

module.exports = function(eleventyConfig) {
  // 允許靜態資源複製
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("css");

  // 新增 works collection
  eleventyConfig.addCollection("works", function(collectionApi) {
    const worksData = require("./data/works.json");
    return worksData;
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
