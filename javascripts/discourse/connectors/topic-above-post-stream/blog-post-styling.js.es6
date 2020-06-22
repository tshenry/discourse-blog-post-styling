export default {
  shouldRender(args, component) {
    const currentCategory = args.model.category;

    if(!currentCategory || settings.no_images) {
      return false;
    }

    const allowedCategories = settings.blog_category.split(",");
    const parentCategorySlug = currentCategory.parentCategory ? `${currentCategory.parentCategory.slug}-` : "";

    return allowedCategories.some(c => c.trim() === `${parentCategorySlug}${currentCategory.slug}`);
  },
};
