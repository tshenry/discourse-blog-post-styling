import computed from "ember-addons/ember-computed-decorators";
export default Ember.Component.extend({
  imageURL: null,
  @computed()
  imageURL() {
    let topic = this.args.topic;
    if (topic.thumbnails) {
      return topic.thumbnails[0].url;
    }
  },
});
