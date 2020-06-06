import { submitDialog } from "./common";

export const killSelect = (element) => {
  if ($(element).find("select").length) {
    const selectText = $(element).find('p:contains("1. Select")').text();
    const selectMatch = /^1\. Select (\w*)$/.exec(selectText);
    if (selectMatch) {
      const optionText = selectMatch[1];
      $(element).find("select").val(optionText);

      submitDialog(element);
    }
  }
};
