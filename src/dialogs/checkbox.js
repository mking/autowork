import $ from "jquery";
import { submitDialog } from "./common";

export const killCheckbox = (element) => {
  if ($(element).find('input[type="checkbox"]').length) {
    const checkboxText = $(element).find('p:contains("1. Select")').text();

    $(element)
      .find("label")
      .filter(function () {
        // The full option text is inside the checkboxText
        return checkboxText.includes($(this).text());
      })
      .click();

    submitDialog(element);
  }
};
