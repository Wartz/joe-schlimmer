module.exports = function(eleventyConfig) {
  // call functions on eleventyConfig here
  eleventyConfig.addPassthroughCopy("style");
  eleventyConfig.addPassthroughCopy("media/*.jpg");

  // return object options in the object starting on the line below
  return {};
};
