import { filterHidden, submitDialog } from "./common";

export const killSlider = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find('p:contains("1. Set slider to")').length) {
        const sliderText = $(this)
          .find('p:contains("1. Set slider to")')
          .text();
        const sliderMatch = /^1. Set slider to (\d+)/.exec(sliderText);
        if (sliderMatch) {
          const valueText = sliderMatch[1];
          $(this).find(".ui-slider").slider("option", "value", valueText);
        }

        submitDialog(this);
      }
    });
};
