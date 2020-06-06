import { submitDialog } from "./common";

export const killTextInput = (element) => {
  if ($(element).find('p:contains("in the input field")').length) {
    const writeText = $(element)
      .find('p:contains("in the input field")')
      .text();
    const writeMatch = /"([^"]+)"/.exec(writeText);
    if (writeMatch) {
      const inputText = writeMatch[1];
      $(element).find("input").val(inputText);

      submitDialog(element);
    }
  }
};
