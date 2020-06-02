export default {
  shouldRender(args, component) {
    let currentCategory = args.model.category;
    let allowedCategories = settings.blog_category.split(",");
    let result = false;
    $.each(allowedCategories, (_, c) => {
      if (currentCategory && currentCategory.slug === c.trim()) {
        result = true;
      }
    });
    return result;
  },
};
