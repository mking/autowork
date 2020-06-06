import { filterHidden, submitDialog } from "./common";

export const killSelect = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find("select").length) {
        const selectText = $(this).find('p:contains("1. Select")').text();
        const selectMatch = /^1\. Select (\w*)$/.exec(selectText);
        if (selectMatch) {
          const optionText = selectMatch[1];
          $(this).find("select").val(optionText);
        }

        submitDialog(this);
      }
    });
};
