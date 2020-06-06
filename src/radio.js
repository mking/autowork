import { filterHidden, submitDialog } from "./common";

export const killRadio = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find('input[type="radio"]').length) {
        const radioText = $(this).find('p:contains("1. Select")').text();

        $(this)
          .find("label")
          .filter(function () {
            // The full option text is inside the radioText
            return radioText.includes($(this).text());
          })
          .first()
          .click();

        submitDialog(this);
      }
    });
};
