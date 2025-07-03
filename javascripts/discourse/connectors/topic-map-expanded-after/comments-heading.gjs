import { i18n } from "discourse-i18n";

const CommentsHeading = <template>
  <div class="comments-heading"><h2>{{i18n
        (themePrefix "blog_post_styling.comments_heading")
      }}</h2></div>
</template>;

export default CommentsHeading;
