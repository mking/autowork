import { filterHidden, submitDialog } from "./common";

export const killButton = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      // Assume a dialog with a single paragraph is a button dialog
      const children = $(this).find(".dialog").children();
      if (children.length === 1 && children.is("p")) {
        submitDialog(this, { prefix: "1. Click" });
      }
    });
};
