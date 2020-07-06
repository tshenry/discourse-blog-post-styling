import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
export default Component.extend({
  imageURL: null,
  @discourseComputed("topic.thumbnails")
  imageURL(thumbnails) {
    if(thumbnails) {
      return thumbnails[0].url;
    }
  },
});
