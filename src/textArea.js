export const killTextArea = (element) => {
  if ($(element).find("textarea").length) {
    const characterText = $(element).find('p:contains("characters")').text();
    const characterMatch = /(\d+) characters/.exec(characterText);
    if (characterMatch) {
      const characterCount = parseInt(characterMatch[1], 10);
      for (let i = 0; i < characterCount; i++) {
        $(element).find("textarea").trigger({ type: "keypress", keyCode: 65 });
      }

      $(element).find('button:contains("Save")').click();
    }
  }
};
