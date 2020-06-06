import $ from "jquery";
import { submitDialog } from "./common";

export const killSlider = (element) => {
  if ($(element).find('p:contains("1. Set slider to")').length) {
    const sliderText = $(element).find('p:contains("1. Set slider to")').text();
    const sliderMatch = /^1\. Set slider to (\d+)/.exec(sliderText);
    if (sliderMatch) {
      const valueText = sliderMatch[1];
      $(element).find(".ui-slider").slider("option", "value", valueText);

      submitDialog(element);
    }
  }
};
