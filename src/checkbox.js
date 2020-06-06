import { filterHidden, submitDialog } from "./common";

export const killCheckbox = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find('input[type="checkbox"]').length) {
        const checkboxText = $(this).find('p:contains("1. Select")').text();

        $(this)
          .find("label")
          .filter(function () {
            // The full option text is inside the checkboxText
            return checkboxText.includes($(this).text());
          })
          .click();

        submitDialog(this);
      }
    });
};
