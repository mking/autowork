import $ from "jquery";

export const killPromotion = (element) => {
  if ($(element).find('p:contains("You have been promoted to")').length) {
    $(element).find('button:contains("Okay")').click();
  }
};
