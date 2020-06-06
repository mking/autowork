export const filterHidden = (element) => {
  return !/display: none/.test($(element).attr("style"));
};

export const submitDialog = (element, { prefix } = { prefix: "2. Click" }) => {
  // Assume submit is step 2
  const submitText = $(element).find(`p:contains("${prefix}")`).text();

  // Assume no spaces in button text
  const submitMatch = new RegExp(`^${prefix} (\\w+)$`).exec(submitText);
  if (submitMatch) {
    const buttonText = submitMatch[1];
    $(element).find(`button:contains('${buttonText}')`).click();
  }
};
