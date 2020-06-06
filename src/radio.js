import $ from "jquery";
import { submitDialog } from "./common";

export const killRadio = (element) => {
  if ($(element).find('input[type="radio"]').length) {
    const radioText = $(element).find('p:contains("1. Select")').text();

    $(element)
      .find("label")
      .filter(function () {
        // The full option text is inside the radioText
        return radioText.includes($(this).text());
      })
      .first()
      .click();

    submitDialog(element);
  }
};
