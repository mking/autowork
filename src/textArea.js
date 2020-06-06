import { filterHidden } from "./common";

export const killTextArea = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find("textarea").length) {
        const characterText = $(this).find('p:contains("characters")').text();
        const characterMatch = /(\d+) characters/.exec(characterText);
        if (characterMatch) {
          const characterCount = parseInt(characterMatch[1], 10);
          for (let i = 0; i < characterCount; i++) {
            $(this).find("textarea").trigger({ type: "keypress", keyCode: 65 });
          }

          $(this).find('button:contains("Save")').click();
        }
      }
    });
};
