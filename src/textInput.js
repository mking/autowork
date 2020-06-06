import { filterHidden, submitDialog } from "./common";

export const killTextInput = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find('p:contains("in the input field")').length) {
        const writeText = $(this)
          .find('p:contains("in the input field")')
          .text();
        const writeMatch = /"([^"]+)"/.exec(writeText);
        if (writeMatch) {
          const inputText = writeMatch[1];
          $(this).find("input").val(inputText);

          submitDialog(this);
        }
      }
    });
};
