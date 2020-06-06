import { filterHidden } from "./common";

export const killPromotion = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find('p:contains("You have been promoted to")').length) {
        $(this).find('button:contains("Okay")').click();
      }
    });
};
