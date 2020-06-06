import { filterHidden, submitDialog } from "./common";

export const killProgressBarIfReady = () => {
  $(".ui-dialog")
    .filter(function () {
      return filterHidden(this);
    })
    .each(function () {
      // Assume a single instruction represents a button dialog
      if ($(this).find(".ui-progressbar[aria-valuenow=100]").length) {
        submitDialog(this);
      }
    });
};
