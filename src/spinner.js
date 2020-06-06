import { submitDialog } from "./common";

export const killSpinner = (element) => {
  if ($(element).find('p:contains("1. Set spinner to")').length) {
    const spinnerText = $(element)
      .find('p:contains("1. Set spinner to")')
      .text();
    const spinnerMatch = /^1\. Set spinner to (-?\d+)$/.exec(spinnerText);
    if (spinnerMatch) {
      const valueText = spinnerMatch[1];
      $(element).find(".ui-spinner-input").spinner("value", valueText);

      submitDialog(element);
    }
  }
};
