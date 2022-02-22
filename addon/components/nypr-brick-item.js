import Component from "@ember/component";
import { computed } from "@ember/object";
import { equal } from "@ember/object/computed";
import { htmlSafe } from "@ember/string";
import { get } from "@ember/object";
import layout from "../templates/components/nypr-brick-item";
import { imageTemplate } from "nypr-ui/helpers/image-template";

export default Component.extend({
  layout,
  classNames: ["brick__item"],
  classNameBindings: ["item.attributes.template"],
  attributeBindings: ["style"],

  style: computed.reads("backgroundImage"),
  vertical: equal("template", "vertical"),
  backgroundImage: computed("item.attributes.imageMain.url", function () {
    var imageMain = get(this, "item.attributes.imageMain");
    var urlString;

    if (imageMain) {
      // just in case we don't get a template and crop from the API, fallback to url
      if (imageMain.template && imageMain.crop) {
        urlString = imageTemplate([imageMain.template, 800, 0, imageMain.crop]);
      } else {
        urlString = imageMain.url;
      }
      return htmlSafe(`background-image: url(${urlString});`);
    }
  }),
});
