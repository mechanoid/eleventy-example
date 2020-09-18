module.exports = (function(eleventyConfig) {
  eleventyConfig.setPugOptions({ pretty: true });
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_content-layouts"
    }
  }
});
