import Category from "discourse/models/category";
import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
export default Component.extend({
  imageURL: null,
  isBlogCategory: false,
  @discourseComputed("topic.category_id")
  isBlogCategory(category_id) {
    const currentCategory = Category.findById(category_id);

    if(!currentCategory || settings.no_images) {
      return false;
    }

    const allowedCategories = settings.blog_category.split(",");
    const parentCategorySlug = currentCategory.parentCategory ? `${currentCategory.parentCategory.slug}-` : "";

    return allowedCategories.some(c => c.trim() === `${parentCategorySlug}${currentCategory.slug}`);
  },
  @discourseComputed("topic.thumbnails")
  imageURL(thumbnails) {
    if(thumbnails) {
      return thumbnails[0].url;
    }
  },
});
