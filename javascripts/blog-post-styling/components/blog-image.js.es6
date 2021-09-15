import Category from "discourse/models/category";
import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
export default Component.extend({
  isBlogTopic: false,
  imageURL: null,
  @discourseComputed("topic.category_id", "topic.tags")
  isBlogTopic(categoryId, topicTags) {
    if(settings.no_images) {
      return false;
    }

    if(categoryId) {
      const allowedCategories = settings.blog_category.split(",");
      const currentCategory = Category.findById(categoryId);
      const parentCategorySlug = currentCategory.parentCategory ? `${currentCategory.parentCategory.slug}-` : "";
      return allowedCategories.some((c) => c.trim() === `${parentCategorySlug}${currentCategory.slug}`);
    }

    if(topicTags) {
      const allowedTags = settings.blog_tag.split("|");
      return allowedTags.some((tag) => topicTags.includes(tag));
    }
  },
  @discourseComputed("topic.thumbnails")
  imageURL(thumbnails) {
    if(thumbnails) {
      return thumbnails[0].url;
    }
  },
});
