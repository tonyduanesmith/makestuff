module.exports.validateArticlesInput = (heading, subheading, main_markdown, image_path) => {
  const errors = {};
  if (heading.trim() === "") {
    errors.heading = "Heading must not be empty";
  }
  if (subheading.trim() === "") {
    errors.subheading = "Subheading must not be empty";
  }
  if (main_markdown.trim() === "") {
    errors.main_markdown = "Main markdown must not be empty";
  }
  if (image_path.trim() === "") {
    errors.image_path = "Image path must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
