import { filterHidden } from "./common";

export const killInspirational = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      if ($(this).find(".inspirational-dialog").length) {
        $(this).find(".ui-dialog-titlebar-close").click();
      }
    });
};
