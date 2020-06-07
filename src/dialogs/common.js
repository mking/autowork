import $ from "jquery";
import escapeStringRegexp from "escape-string-regexp";

export const submitDialog = (element, { prefix } = { prefix: "2. Click" }) => {
  // Assume submit is step 2
  const submitText = $(element).find(`p:contains("${prefix}")`).text();

  // Assume no spaces in button text
  const submitMatch = new RegExp(`^${escapeStringRegexp(prefix)} (\\w+)$`).exec(
    submitText
  );
  if (submitMatch) {
    const buttonText = submitMatch[1];
    $(element).find(`button:contains('${buttonText}')`).click();
  }
};
